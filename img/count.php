<?php

$dir    = 'bg/';
$files1 = scandir($dir);
print_r((count($files1) - 2) / 3);