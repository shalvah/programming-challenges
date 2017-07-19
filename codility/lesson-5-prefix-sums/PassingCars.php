<?php

function solution($A) {
    $pairs = 0;
    $multiplier = 0;
    foreach ($A as $i) {
        if ($i == 0) {
            $multiplier++;
        } else {
            $pairs += $multiplier;
            if ($pairs > 1000000000) return -1;
        }
    }
    return $pairs;
}
