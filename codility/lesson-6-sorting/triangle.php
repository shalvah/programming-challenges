<?php
// once we sort the array, we only need to check if A[P] + A[Q] > A[R]
// because the other conditions become automatically true

function solution($A) {
    sort($A);
    for ($i = 0; $i < count($A) - 2; $i++) {
        if ($A[$i] + $A[$i+1] > $A[$i+2]) return 1;
    }
    return 0;
}
