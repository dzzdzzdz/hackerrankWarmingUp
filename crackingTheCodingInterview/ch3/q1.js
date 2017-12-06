class TripleStack {
    constructor() {
        this._array = [];
        this._lengths = [0,0,0];
    }

    _getLength(stack) {
        return this._lengths[stack-1];
    }

    push(stack, value) {
        let index = this._getLength(stack) * 3 + stack - 1;
        this._array[index] = value;
        this._lengths[stack-1]++;
    }

    pop(stack) {
        let length = this._getLength(stack);
        let value;
        if (length > 0) {
            let index = (length - 1) * 3 + stack - 1;
            value = this._array[index];
            this._array[index] = undefined;
            this._lengths[stack-1]--;
        }
        return value;
    }

    peek(stack) {
        let length = this._getLength(stack);
        let value;
        if (length > 0) {
            let index = (length - 1) * 3 + stack - 1;
            value = ths._array[index];
        }
        return value;
    }

    isEmpty(stack) {
        return this._getLength(stack) === 0;
    }
}