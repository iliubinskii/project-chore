<?php

namespace Actions;

use Api\Git;
use Api\Npm;
use Api\Package;
use Api\PreCommitConfig;

class PreCommit
{
  /**
   * Pre-commit hook.
   */
  public static function do(): void
  {
    $preCommitConfig = new PreCommitConfig();
    $package = new Package();
    $npm = new Npm($package);

    if (Git::hasTag($package->version))
    {
      Git::noMasterBranch();
      $package->noFileDependencies();
    }
    else
    {
      Git::checkVersion($package->version);
      Git::noMasterBranch();
      $package->noDeprecated();
      $package->noFileDependencies();

      Git::noPartialCommit();

      $npm->regenerateLockFile();
      $npm->buildChangeLog();
      $npm->build();
      $npm->buildEs();
      $npm->buildDoc();
      $npm->phpCsFixer();

      Git::noPartialCommit();

      $npm->noVulnerabilities($preCommitConfig->audit);
      $npm->commitlint();
      $npm->commitlintNext();
      $npm->configLint();
      $npm->packageJsonLint();
      $npm->tsc();
      $npm->vueTsc();
      $npm->lint();
      $npm->phpstan();
      $npm->stylelint();
      $npm->stylelintHtml();
      $npm->test();

      Git::noPartialCommit();
    }
  }
}
