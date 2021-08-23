function getRealFloor(n) {
    if (n <= 0) {
        return n;
    } else if (n > 0 && n < 14) {
        return n - 1;
    } else {
        return n - 2;
    }
}

console.log(getRealFloor(15), 13);