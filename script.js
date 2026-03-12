// Simple Calculator
class Calculator {
    constructor() {
        this.display = '';
        this.previousValue = null;
        this.operation = null;
    }

    append(value) {
        this.display += value;
    }

    clear() {
        this.display = '';
        this.previousValue = null;
        this.operation = null;
    }

    setOperation(op) {
        if (this.display === '') return;
        if (this.previousValue === null) {
            this.previousValue = parseFloat(this.display);
        } else if (this.operation) {
            this.calculate();
        }
        this.operation = op;
        this.display = '';
    }

    calculate() {
        if (this.operation === null || this.previousValue === null) return;
        
        const current = parseFloat(this.display);
        let result;

        switch (this.operation) {
            case '+':
                result = this.previousValue + current;
                break;
            case '-':
                result = this.previousValue - current;
                break;
            case '*':
                result = this.previousValue * current;
                break;
            case '/':
                result = this.previousValue / current;
                break;
            default:
                return;
        }

        this.display = result.toString();
        this.previousValue = null;
        this.operation = null;
    }

    getDisplay() {
        return this.display || '0';
    }
}

// Usage
const calc = new Calculator();