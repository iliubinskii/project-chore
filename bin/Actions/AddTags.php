<?php

namespace Actions;

use Api\Commit;
use Api\Git;

class AddTags
{
  /**
   * Adds version tags.
   */
  public static function do(): void
  {
    $tags = Git::getTags();

    foreach (Git::getCommits() as $commit)
    {
      if (Commit::versionCommit($commit))
      {
        list('id' => $id, 'message' => $message) = $commit;

        $tag = 'v'.$message;

        if (in_array($tag, $tags))
        {
          // Tag already exists
        }
        else
        {
          Git::addTag($tag, $id);
        }
      }
    }

    Git::pushTags();
  }
}
