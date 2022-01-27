class math{
    sum = (...operands) => {
        console.log(operands);
        return operands[0] + operands[1];
    }

    mul = (...operands) => {
        return operands[0] * operands[1];
    }

    div = (...operands) => {
        if(operands[1] === 0) return "*-*";
        return operands[0] / operands[1];
    }

    sub = (...operands) => {
        return operands[0] - operands[1];
    }
}

export class Calculadora{
    operand1 = '';
    operand2 = '';
    operation = '';
    memory = '';

    operadors = new math();

    setOperand1(_operand1){
        this.operand1 += _operand1;
    }

    setOperand2(_operand2){
        this.operand2 += _operand2
    }

    setOperation(_operation){
        this.operation = _operation === '+' ? this.operadors.sum : _operation === '-' ? this.operadors.sub : _operation === 'x' ? this.operadors.mul : _operation === '/' ? this.operadors.div : '';
    }

    getResult(){
        if(this.operand1 && this.operand2) {
            this.operand1 = this.operation(Number(this.operand1), Number(this.operand2));
            this.memoryOperation = this.operation;
            this.memoryNumber = this.operand2;
            this.operand2 = '';
            this.operation = '';
            return this.operand1;
        }else if(this.memoryNumber) {
            this.operand1 = this.memoryOperation(Number(this.operand1), Number(this.memoryNumber));
            return this.operand1;
        }
        return "Os dois operandos devem existir";
    }

    clearCalculator(){
        this.operand1 = '';
        this.operand2 = '';
        this.operation = ''
    }
}