<?php

namespace Api;

use Real\Config\Assert;
use Real\Config\Unknown;

class VersionConfig
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
    if (file_exists('.version.json'))
    {
      $raw = Assert::string(file_get_contents('.version.json'));

      $config = Unknown\Assert::array(Util::decodeJson($raw, '.version.json'));
    }
    else
    {
      $config = [];
    }

    $this->audit = Unknown\Assert::string($config['audit'] ?? 'npm audit');
  }
}
