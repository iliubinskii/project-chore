<?php

namespace Actions;

use Api\Npm;

class FullCheck
{
  /**
   * Full check.
   */
  public static function do(): void
  {
    $npm = new Npm(true);

    $npm->fullCheck('patch');
  }
}
