<?php

namespace Api;

use Real\Config\Assert;

class Path
{
  /**
   * Concatenates paths.
   *
   * @param string $parts
   */
  public static function concat(...$parts): string
  {
    return Assert::string(preg_replace('`[/\\\\]+`isuxDX', '/', implode('/', $parts)));
  }

  /**
   * Returns parent directory's path.
   *
   * @return false|string
   */
  public static function dirname(string $path): mixed
  {
    $result = dirname($path);

    return $result === $path ? false : $result;
  }
}
