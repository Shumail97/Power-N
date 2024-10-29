function powerIterative(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

// Test cases
console.log(powerIterative(3, 2)); // should give 9
console.log(powerIterative(2, 3)); // should give 8
console.log(powerIterative(4, 4)); // should give 256

// Recursive way

function powerRecursive(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else {
        return base * powerRecursive(base, exponent - 1);
    }
}

// Test cases
console.log(powerRecursive(3, 2)); // should give 9
console.log(powerRecursive(2, 3)); // should give 8
console.log(powerRecursive(4, 4)); // should give 256
