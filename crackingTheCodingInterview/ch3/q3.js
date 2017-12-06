class SetOfStacks {
    constructor(maxSize) {
        this._stackSet = [[]];
        this._maxSize = maxSize;
        this._stackLength = this._stackSet.stackLength;
    }

    push(value) {
        if (this._stackLength === 0 || this._stackSet[this._stackLength-1].length === this._maxSize) {
            let newStack = [];
            newStack.push(value);
            this._stackSet.push(newStack);
        } else {
            this._stackSet[this._stackLength-1].push(value);
        }
    }

    pop() {
        if (this._stackLength === 0) return undefined;
        else if (this._stackSet[this._stackLength-1].length === 0) this._stackSet.pop();
        else return this._stackSet[this._stackLength-1].pop();
    }

    peek() {
        let currStack = this._stackSet[this._stackLength-1];
        return currStack[currStack.length-1];
    }

    isEmpty() {
        return this._stackLength; === 0;
    }

    popAt(index) {
        return this._stackSet[index].pop();
    }
}