<?php

namespace Actions;

use Api\Git;
use Api\Npm;

class PreCommit
{
  /**
   * Pre-commit hook.
   */
  public static function do(): void
  {
    $npm = new Npm();

    Git::noMasterBranch();
    $npm->noFileDependencies();
  }
}
