<?php

namespace Api;

class Commit
{
  /**
   * Checks if commit is initial commit.
   *
   * @param array{id:string,message:string} $commit
   */
  public static function initialCommit(array $commit): bool
  {
    return $commit['message'] === 'initial commit';
  }

  /**
   * Checks if commit contains major change.
   *
   * @param array{id:string,message:string} $commit
   */
  public static function majorChange(array $commit): bool
  {
    return str_contains($commit['message'], '!: ');
  }

  /**
   * Checks if commit contains minor change.
   *
   * @param array{id:string,message:string} $commit
   */
  public static function minorChange(array $commit): bool
  {
    return str_starts_with($commit['message'], 'build(deps-major-update)')
      || str_starts_with($commit['message'], 'feat')
      || str_starts_with($commit['message'], 'revert');
  }

  /**
   * Checks if commit is version commit.
   *
   * @param array{id:string,message:string} $commit
   */
  public static function versionCommit(array $commit): bool
  {
    return preg_match('`^\\d+\\.\\d+\\.\\d+$`isuxDX', $commit['message']) === 1;
  }
}
