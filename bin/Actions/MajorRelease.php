<?php

namespace Actions;

use Api\Npm;

class MajorRelease
{
  /**
   * Major release.
   */
  public static function do(): void
  {
    $npm = new Npm();

    $npm->release('major');
  }
}
