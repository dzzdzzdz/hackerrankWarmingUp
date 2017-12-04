class linkedList {
    constructor(data, next) {
        this.data = data;
        this.next = null;
    }
}

const removeDups = (list) => {
    let current = list;
    while (current) {
        let runner = current;
        while (runner.next) {
            if (runner.next.data === current.data) runner.next = runner.next.next;
            else runner = runner.next;
        }
        current = current.next;
    }
}