<?php

namespace Actions;

use Api\Git;
use Api\Package;

class PreCommit
{
  /**
   * Pre-commit hook.
   */
  public static function do(): void
  {
    $package = new Package();

    Git::noMasterBranch();
    $package->noFileDependencies();
  }
}
