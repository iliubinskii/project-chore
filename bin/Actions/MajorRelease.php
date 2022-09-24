<?php

namespace Actions;

use Api\Git;
use Api\Npm;

class MajorRelease
{
  /**
   * Major release.
   */
  public static function do(): void
  {
    $npm = new Npm();

    Git::noMasterBranch();
    $npm->release('major');
  }
}
