<?php

namespace Actions;

use Api\Commit;
use Api\Git;
use Throwable;

class DeleteTags
{
  /**
   * Deletes version tags.
   */
  public static function do(): void
  {
    $tags = Git::getTags();

    foreach (Git::getCommits() as $commit)
    {
      if (Commit::versionCommit($commit))
      {
        list('message' => $message) = $commit;

        $tag = 'v'.$message;

        if (in_array($tag, $tags))
        {
          Git::deleteTag($tag);

          try
          {
            Git::deleteRemoteTag($tag);
          }
          catch (Throwable)
          {
            // Ignore
          }
        }
      }
    }
  }
}
