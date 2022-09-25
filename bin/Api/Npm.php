<?php

namespace Api;

use Real\Config\Assert;
use Real\Config\BaseException;

class Npm
{
  /**
   * Initializes class instance.
   */
  public function __construct(bool $interactive = false)
  {
    $this->interactive = $interactive;
  }

  /**
   * Runs "build" script.
   */
  public function build(): void
  {
    static::run('build', 'Building CommonJS version');
  }

  /**
   * Builds all.
   */
  public function buildAll(): void
  {
    $this->buildChangeLog();
    $this->build();
    $this->buildEs();
    $this->buildDoc();
    $this->phpCsFixer();
  }

  /**
   * Runs "build-changelog" script.
   */
  public function buildChangeLog(): void
  {
    static::run('build-changelog', 'Building change log');
  }

  /**
   * Runs "build-doc" script.
   */
  public function buildDoc(): void
  {
    static::run('build-doc', 'Building documentation');
  }

  /**
   * Runs "build-es" script.
   */
  public function buildEs(): void
  {
    static::run('build-es', 'Building es version');
  }

  /**
   * Runs "commitlint" script.
   */
  public function commitlint(): void
  {
    static::run('commitlint', 'Linting with commitlint');
  }

  /**
   * Runs "commitlint-next" script.
   */
  public function commitlintNext(): void
  {
    static::run('commitlint-next', 'Linting with commitlint (next)');
  }

  /**
   * Runs "config-lint" script.
   */
  public function configLint(): void
  {
    static::run('config-lint', 'Linting with config-lint');
  }

  /**
   * Full check.
   */
  public function fullCheck(string $version): void
  {
    $config = new ReleaseConfig();

    $this->noDeprecated($version);
    $this->noFileDependencies();
    $this->noVulnerabilities($config->audit);
    $this->commitlint();
    $this->configLint();
    $this->markdownlint();
    $this->packageJsonLint();
    $this->tsc();
    $this->vueTsc();
    $this->lint();
    $this->phpstan();
    $this->stylelint();
    $this->stylelintHtml();
  }

  /**
   * Installs npm dependencies.
   */
  public function install(): void
  {
    static::run('npm:install', 'Installing npm dependencies');
  }

  /**
   * Runs "lint" script.
   */
  public function lint(): void
  {
    static::run('lint-no-fix', 'Linting with eslint');
  }

  /**
   * Runs "markdownlint" script.
   */
  public function markdownlint(): void
  {
    static::run('markdownlint', 'Linting with markdownlint');
  }

  /**
   * No deprecated.
   */
  public function noDeprecated(string $version): void
  {
    if ($version === 'major' && file_exists('src'))
    {
      foreach (Sys::scanDirDeep('src') as $path)
      {
        if (is_file($path))
        {
          $contents = Assert::string(file_get_contents($path));

          if (preg_match('`\*\s*@deprecated`isuxDX', $contents))
          {
            throw new BaseException('No deprecated');
          }
        }
      }
    }
  }

  /**
   * Asserts no file dependencies.
   */
  public function noFileDependencies(): void
  {
    $package = new Package();

    foreach ([$package->dependencies, $package->devDependencies, $package->peerDependencies] as $deps)
    {
      foreach ($deps as $dep)
      {
        if (str_starts_with($dep, 'file:'))
        {
          throw new BaseException('No file dependencies');
        }
      }
    }
  }

  /**
   * No vulnerabilities.
   */
  public function noVulnerabilities(string $cmd): void
  {
    Sys::execute($cmd, 'Checking for vulnerablilties');
  }

  /**
   * Runs "package-json-lint" script.
   */
  public function packageJsonLint(): void
  {
    static::run('package-json-lint', 'Linting with package-json-lint');
  }

  /**
   * Runs php-cs-fixer.
   */
  public function phpCsFixer(): void
  {
    static::run('php-cs-fixer', 'Formatting with php-cs-fixer');
  }

  /**
   * Runs phpstan.
   */
  public function phpstan(): void
  {
    static::run('phpstan-quiet', 'Linting with phpstan');
  }

  /**
   * Release.
   */
  public function release(string $version): void
  {
    Sys::flush('Release '.$version.' version');

    $this->install();

    $this->fullCheck($version);
    $this->testRelease();

    $this->version($version);

    $package = new Package();
    $commit = $package->version;
    $tag = 'v'.$commit;

    Git::stageAll();
    Git::commit($commit);

    // Tag needed for "build-changelog" command
    Git::addTag($tag);
    $this->buildAll();
    Git::deleteTag($tag);

    Git::stageAll();
    Git::ammendLastCommit();

    Git::addTag($tag);

    Git::push();
    Git::pushTags();
    Git::rebaseMasterToDevelop();
  }

  /**
   * Runs "stylelint" script.
   */
  public function stylelint(): void
  {
    static::run('stylelint-no-fix', 'Linting with stylelint');
  }

  /**
   * Runs "stylelint-html" script.
   */
  public function stylelintHtml(): void
  {
    static::run('stylelint-html-no-fix', 'Linting with stylelint (html)');
  }

  /**
   * Runs "test-release" script.
   */
  public function testRelease(): void
  {
    static::run('test-release', 'Testing');
  }

  /**
   * Runs "tsc" script.
   */
  public function tsc(): void
  {
    static::run('tsc', 'Linting with tsc');
  }

  /**
   * Bumps version.
   */
  public function version(string $version): void
  {
    Sys::execute('npm version '.$version.' --no-git-tag-version');
  }

  /**
   * Runs "vue-tsc" script.
   */
  public function vueTsc(): void
  {
    static::run('vue-tsc', 'Linting with vue-tsc');
  }

  /**
   * @var bool
   */
  protected $interactive;

  /**
   * Runs script.
   */
  protected function run(string $name, string $message): void
  {
    $package = new Package();

    if ($package->hasScript($name))
    {
      Sys::execute('npm run '.$name, $message, $this->interactive);
    }
  }
}
