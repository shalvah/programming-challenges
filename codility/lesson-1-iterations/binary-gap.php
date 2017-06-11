<?php

function solution($N) {
    $lastOne = $i = $gap = 0;
	
    while ($N > 0) {
      $i++;
      if (($N % 2) == 1) {
          if ($lastOne > 0) {
              $newGap = ($i - $lastOne - 1);
              $gap =  $newGap > $gap ? $newGap : $gap;
          }
          $lastOne = $i;
      }
      $N = (int)($N/2);
  }
  return $gap;
}
