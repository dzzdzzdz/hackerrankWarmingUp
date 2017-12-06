class minStack {
    // Uses an extra stack to keep track of min values as they come
    constructor() {
        this._stack = [];
        this._mins = [];
        this._stackLength = this._minsLength = 0;
    }

    push(value) {
        this._stack[this.stackLength++] = value;

        const min = this._mins[this.minsLength-1];
        if (!min || min >= value) this._mins[this._minsLength++] = value;
    }

    pop() {
        if (!this.isEmpty()) {
            let stackTop = this._stack[this._stackLength-1];
            this._stack[this._stackLength-1] = null;
            this._stackLength--;

            if (stackTop === this_mins[this._minsLength-1]) {
                this._mins[this._minsLength-1] = null;
                this._minsLength--;
            }
        }
        return stackTop;
    }

    min() {
        return this._mins[this._minsLength-1];
    }

    peek() {
        return this._stack[this._stackLength-1];
    }

    isEmpty() {
        return this._stackLength === 0;
    }
}