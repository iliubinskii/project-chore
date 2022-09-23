<?php

namespace Actions;

use Api\Git;
use Throwable;

class DeleteTags
{
  /**
   * Deletes version tags.
   */
  public static function do(): void
  {
    foreach (Git::getTags() as $tag)
    {
      if (preg_match('`^v\\d+\\.\\d+\\.\\d+$`isuxDX', $tag))
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
