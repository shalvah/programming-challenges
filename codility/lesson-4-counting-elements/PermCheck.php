function solution($A) {
  $B = [];
  foreach ($A as $v) {
      if ($v > count($A) || isset($B[$v])) return 0;
      $B[$v] = $v;
  }
  return 1;
}
