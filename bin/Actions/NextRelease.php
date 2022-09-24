<?php

namespace Actions;

use Api\Commit;
use Api\Git;
use Api\Npm;

class NextRelease
{
  /**
   * Next version.
   */
  public static function do(): void
  {
    $npm = new Npm();

    Git::noMasterBranch();
    $npm->release(static::version());
  }

  /**
   * Checks version.
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
