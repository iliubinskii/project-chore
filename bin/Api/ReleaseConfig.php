<?php

namespace Api;

use Real\Config\Assert;
use Real\Config\Unknown;

class ReleaseConfig
{
  /**
   * @var string
   */
  public $audit;

  /**
   * Initializes class instance.
   */
  public function __construct()
  {
    if (file_exists('.release.json'))
    {
      $raw = Assert::string(file_get_contents('.release.json'));

      $config = Unknown\Assert::array(Util::decodeJson($raw, '.release.json'));
    }
    else
    {
      $config = [];
    }

    $this->audit = Unknown\Assert::string($config['audit'] ?? 'npm audit');
  }
}
