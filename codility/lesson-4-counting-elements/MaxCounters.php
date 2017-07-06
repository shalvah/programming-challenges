<?php

function solution($N, $A) {
    $counters = array_fill(0, $N, 0);
    $tempMax = $max = 0;
    foreach ($A as $v) {
        if ($v !== $N + 1) {
            $counters[--$v] = max($counters[$v], $max) + 1;
            $tempMax = $counters[$v] > $tempMax ? $counters[$v] : $tempMax;
        } else {
            $max = $tempMax;
        }
    }
    foreach ($counters as &$c) {
        $c = max($max, $c);
    }
    return $counters;
}
