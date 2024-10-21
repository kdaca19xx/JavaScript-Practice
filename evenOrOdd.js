function evenOrOdd(num) {
    if (num < 0) {
        num = Math.abs(num);
    }
    if (num === 0) {
        return 'Even';
    }
    if (num === 1) {
        return 'Odd';
    }
    return evenOrOdd(num - 2);
}