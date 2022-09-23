<?php

namespace Actions;

use Api\Git;
use Api\Npm;
use Api\Package;

class Version
{
  /**
   * Version hook.
   */
  public static function do(): void
  {
    $package = new Package();
    $npm = new Npm($package);

    $commit = $package->version;
    $tag = 'v'.$commit;

    $package->noDeprecated();
    $npm->fullCheck();

    Git::stageAll();
    Git::commit($commit);
    Git::addTag($tag);

    $npm->buildAll();

    Git::deleteTag($tag);
    Git::stageAll();
    Git::ammendLastCommit();
    Git::addTag($tag);

    Git::push();
    Git::pushTags();
    Git::rebaseMasterToDevelop();
  }
}
