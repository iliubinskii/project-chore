<?php

include_once __DIR__.'/php-cs-fixer/recommended.php';

$finder = PhpCsFixer\Finder::create()->in([
  __DIR__.'/api',
  __DIR__.'/bin',
  __DIR__.'/php-cs-fixer',
]);

$config = new PhpCsFixer\Config();

return $config
  ->setFinder($finder)
  ->setIndent('  ')
  ->setLineEnding("\n")
  ->setRules(Recommended::$rules)
;
