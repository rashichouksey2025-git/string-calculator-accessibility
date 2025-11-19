"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateSum = void 0;
const calculateSum = (input) => {
    const numbers = input
        .split(/[\s,]+/)
        .map((n) => parseFloat(n))
        .filter((n) => !isNaN(n));
    if (numbers.length === 0)
        return null;
    return numbers.reduce((acc, curr) => acc + curr, 0);
};
exports.calculateSum = calculateSum;
