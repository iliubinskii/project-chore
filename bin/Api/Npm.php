<?php

namespace Api;

use Real\Config\Assert;
use Real\Config\BaseException;

class Npm
{
  /**
   * Initializes class instance.
   */
  public function __construct(Package $package, bool $interactive = false)
  {
    $this->package = $package;
    $this->interactive = $interactive;
  }

  /**
   * Runs "build" script.
   */
  public function build(): void
  {
    static::run('build', 'Building');
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
  public function fullCheck(): void
  {
    $versionConfig = new VersionConfig();

    $this->noVulnerabilities($versionConfig->audit);
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
   * Runs "test" script.
   */
  public function test(): void
  {
    if ($this->package->hasScript('test'))
    {
      static::run('test', 'Testing');

      $coverage = Assert::string(file_get_contents('lcov-report/index.html'));

      preg_match_all('`(\\d+)/(\\d+)`isuxDX', $coverage, $matches, PREG_SET_ORDER);

      foreach ($matches as $match)
      {
        if ($match[1] !== $match[2])
        {
          throw new BaseException('Incomplete coverage');
        }
      }
    }
  }

  /**
   * Runs "tsc" script.
   */
  public function tsc(): void
  {
    static::run('tsc', 'Linting with tsc');
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
   * @var Package
   */
  protected $package;

  /**
   * Runs script.
   */
  protected function run(string $name, string $message): void
  {
    if ($this->package->hasScript($name))
    {
      Sys::execute('npm run '.$name, $message, $this->interactive);
    }
  }
}
