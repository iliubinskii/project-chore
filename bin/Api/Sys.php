<?php

namespace Api;

use Real\Config\Assert;
use Real\Config\BaseException;

class Sys
{
  /**
   * Executes command.
   *
   * @return string[]
   */
  public static function execute(string $command, string $description = null, bool $interactive = false): array
  {
    if ($interactive)
    {
      static::flush($description.' ...');

      $result = exec($command.' >nul 2>nul', $output, $code);

      $status = $code || $result === false ? static::RED.'Failed'.static::RESET : 'OK';

      static::flush(static::UP1LINE.$description.' - '.$status);

      return [];
    }

    static::flush($description);

    $result = exec($command, $output, $code);

    if ($code || $result === false)
    {
      throw new BaseException('Command failed: '.$command);
    }

    return $output;
  }

  /**
   * Flushes string.
   */
  public static function flush(string $str = null): void
  {
    if ($str !== null)
    {
      echo $str.PHP_EOL;

      if (ob_get_level() > 0)
      {
        ob_flush();
      }

      flush();
    }
  }

  /**
   * Scans directory.
   *
   * @param string[] $ignore
   *
   * @return string[]
   */
  public static function scanDir(string $dir, array $ignore = []): array
  {
    return array_diff(Assert::strings(scandir($dir)), ['.', '..', ...$ignore]);
  }

  /**
   * Scans directory.
   *
   * @param string[] $ignore
   *
   * @return string[]
   */
  public static function scanDirDeep(string $dir, array $ignore = []): array
  {
    $result = [];

    foreach (static::scanDir($dir, $ignore) as $basename)
    {
      array_push($result, $dir.'/'.$basename);

      if (is_dir($dir.'/'.$basename))
      {
        array_push($result, ...static::scanDirDeep($dir.'/'.$basename));
      }
    }

    return $result;
  }

  protected const GREEN = "\033[92m";
  protected const RED = "\033[91m";
  protected const RESET = "\033[0m";
  protected const UP1LINE = "\x1B[1A";
}
