class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }
}

// Example usage:
const calc = new Calculator();
console.log("Add: " + calc.add(10, 5)); // 15
console.log("Subtract: " + calc.subtract(10, 5)); // 5
console.log("Multiply: " + calc.multiply(10, 5)); // 50
console.log("Divide: " + calc.divide(10, 5)); // 2


const Calculator = require('./test');

// FILE: test.test.js

describe('Calculator', () => {
    let calc;

    beforeEach(() => {
        calc = new Calculator();
    });

    test('should add two numbers correctly', () => {
        expect(calc.add(10, 5)).toBe(15);
    });

    test('should subtract two numbers correctly', () => {
        expect(calc.subtract(10, 5)).toBe(5);
    });

    test('should multiply two numbers correctly', () => {
        expect(calc.multiply(10, 5)).toBe(50);
    });

    test('should divide two numbers correctly', () => {
        expect(calc.divide(10, 5)).toBe(2);
    });

    test('should throw an error when dividing by zero', () => {
        expect(() => calc.divide(10, 0)).toThrow("Division by zero is not allowed.");
    });
});