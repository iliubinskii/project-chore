<?php

namespace Api;

use Real\Config\Assert;
use Real\Config\Unknown;

class Package
{
  /**
   * @var string[]
   */
  public $dependencies;

  /**
   * @var string[]
   */
  public $devDependencies;

  /**
   * @var string
   */
  public $name;

  /**
   * @var string[]
   */
  public $peerDependencies;

  /**
   * @var string[]
   */
  public $scripts;

  /**
   * @var string
   */
  public $version;

  /**
   * Initializes class instance.
   */
  public function __construct()
  {
    $str = Assert::string(file_get_contents('package.json'));

    $config = Unknown\Assert::array(Util::decodeJson($str, 'package.json'));

    $this->name = Unknown\Assert::string($config['name']);
    $this->version = Unknown\Assert::string($config['version']);
    $this->dependencies = Unknown\Assert::strings($config['dependencies'] ?? []);
    $this->devDependencies = Unknown\Assert::strings($config['devDependencies'] ?? []);
    $this->peerDependencies = Unknown\Assert::strings($config['peerDependencies'] ?? []);
    $this->scripts = Unknown\Assert::strings($config['scripts'] ?? []);
  }

  /**
   * Checks if package.json has script.
   */
  public function hasScript(string $script): bool
  {
    return array_key_exists($script, $this->scripts);
  }
}
