<?php

// the maximum product of three numbers must be the product of the 3 largest positive numbers
// or of the two smallest negative numbers and the largest positive

function solution($A) {
    sort($A);
    if (intval($A[1]) < 0) $max = $A[0]*$A[1]* end($A);
    $maxPos = end($A) * prev($A) * prev($A);
    return isset($max) ? max($max, $maxPos) : $maxPos;
}
