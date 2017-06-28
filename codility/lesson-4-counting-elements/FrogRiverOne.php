function solution($X, $A) {
    $ints = range(1, $X);
    foreach ($A as $i => $v) {
        if (isset($ints[$v-1])) unset($ints[$v-1]);
        if (!count($ints)) return $i;
    }
    return -1;
}
