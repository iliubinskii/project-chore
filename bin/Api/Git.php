<?php

namespace Api;

use Real\Config\Assert;
use Real\Config\BaseException;

class Git
{
  /**
   * Adds tag.
   */
  public static function addTag(string $tag, string $commit = null): void
  {
    Sys::execute(
      $commit === null
        ? 'git tag '.$tag
        : 'git tag '.$tag.' '.$commit
    );
  }

  /**
   * Ammends last commit.
   */
  public static function ammendLastCommit(): void
  {
    Sys::execute('git commit --amend --no-edit');
  }

  /**
   * Commits staged changes.
   */
  public static function commit(string $message): void
  {
    Sys::execute('git commit --message '.$message);
  }

  /**
   * Deletes tag from remote origin.
   */
  public static function deleteRemoteTag(string $tag): void
  {
    static::executeWithKey('git push --delete origin '.$tag, 'Deleting tag '.$tag);
  }

  /**
   * Deletes tag.
   */
  public static function deleteTag(string $tag): void
  {
    Sys::execute('git tag --delete '.$tag);
  }

  /**
   * Retrieves commits.
   *
   * @return array<array{id:string,message:string}>
   */
  public static function getCommits(): array
  {
    return array_map(
      function (string $commit): array
      {
        list($id, $message) = explode(':', $commit, 2);

        return ['id' => $id, 'message' => trim($message)];
      },
      Sys::execute('git --no-pager log --pretty=format:%H:%s')
    );
  }

  /**
   * Retrieves tags.
   *
   * @return array<string>
   */
  public static function getTags(): array
  {
    return Sys::execute('git tag');
  }

  /**
   * No master branch.
   */
  public static function noMasterBranch(): void
  {
    if (in_array('* master', Sys::execute('git branch')))
    {
      throw new BaseException('No master branch');
    }
  }

  /**
   * Push current branch.
   */
  public static function push(): void
  {
    static::executeWithKey('git push', 'Pushing develop');
  }

  /**
   * Pushes tags to remote origin.
   */
  public static function pushTags(): void
  {
    static::executeWithKey('git push --tags origin', 'Pushing tags');
  }

  /**
   * Rebases master to develop.
   */
  public static function rebaseMasterToDevelop(): void
  {
    Sys::execute('git checkout master');
    Sys::execute('git rebase develop');
    static::executeWithKey('git push', 'Pushing master');
    Sys::execute('git checkout develop');
  }

  /**
   * Stages all changes.
   */
  public static function stageAll(): void
  {
    Sys::execute('git add --all');
  }

  /**
   * Executes command.
   */
  protected static function executeWithKey(string $command, string $description = null): void
  {
    Sys::flush($description);

    $keyPath = Path::concat(static::getKeysPath(), 'id_rsa');

    $process = Assert::resource(
      proc_open(
        $command,
        [],
        $pipes,
        null,
        ['GIT_SSH_COMMAND' => 'ssh -i "'.$keyPath.'"'],
        ['bypass_shell' => true]
      )
    );

    $code = proc_close($process);

    if ($code)
    {
      throw new BaseException('Command failed: '.$command);
    }
  }

  /**
   * Searches for keys folder.
   */
  protected static function getKeysPath(): string
  {
    $dir = __DIR__;

    while ($dir !== false)
    {
      $candidate = Path::concat($dir, '.ssh');

      if (is_dir($candidate))
      {
        return $candidate;
      }

      $dir = Path::dirname($dir);
    }

    throw new BaseException('Missing keys folder');
  }
}
