<?php

namespace Actions;

use Api\Npm;
use Api\Package;

class FullCheck
{
  /**
   * Full check.
   */
  public static function do(): void
  {
    $npm = new Npm(new Package(), true);

    $npm->fullCheck();
  }
}
