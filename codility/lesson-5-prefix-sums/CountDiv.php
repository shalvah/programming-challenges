<?php

function solution($A, $B, $K) {
    $res = intval($B/$K) - intval($A/$K);
    return ($A % $K) ? $res : ++$res;
}
