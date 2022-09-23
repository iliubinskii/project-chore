<?php

namespace Actions;

use Api\Commit;
use Api\Git;
use Api\Sys;

class Next
{
  /**
   * Next version.
   */
  public static function do(): void
  {
    Sys::execute('npm version '.static::version().' --no-git-tag-version');
  }

  /**
   * Checks version.
   *
   * @return "major"|"minor"|"patch"
   */
  protected static function version(): string
  {
    $commits = Git::getCommits();

    foreach ($commits as $commit)
    {
      if (Commit::majorChange($commit))
      {
        return 'major';
      }

      if (Commit::initialCommit($commit) || Commit::versionCommit($commit))
      {
        break;
      }
    }

    foreach ($commits as $commit)
    {
      if (Commit::minorChange($commit))
      {
        return 'minor';
      }

      if (Commit::initialCommit($commit) || Commit::versionCommit($commit))
      {
        break;
      }
    }

    return 'patch';
  }
}
