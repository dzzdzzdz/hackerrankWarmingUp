class MyQueue {
    constructor() {
        this._new = [];
        this._old = [];
    }

    enqueue(value) {
        this._new.push(value);
    }

    dequeue() {
        this._shiftStacks();
        return this._old.pop();
    }

    peek() {
        this._shiftStacks();
        return this._old[this._old.length-1];
    }

    _shiftStacks() {
        if (this._old.length === 0) {
            while (this._new.length !== 0) {
                this._old.push(this._new.pop());
            }
        }
    }
}