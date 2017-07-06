<?php

function solution($A)
{
    $a = array_flip($A);
    $ref = range(1, count($A));
    foreach($ref as $i) {
        if (!isset($a[$i])) return $i;
    }
    return ++$i;
}
