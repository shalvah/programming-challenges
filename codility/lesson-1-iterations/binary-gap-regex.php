<?php

//alternate solution using regex

function solution($N) {
    $r = "";
  while ($N > 0) {
      $r .= $N % 2; 
      $N = (int)($N/2);
  }
  $b = strrev($r);
  $gaps = [];
  preg_match("/10+?1/", $b, $gaps);
  if (empty($gaps)) return 0;
  else return array_reduce($gaps, function ($longest, $i) {
      if (strlen($i) > $longest) return strlen($i) - 2;
      return $longest;
  }, 1);
}
