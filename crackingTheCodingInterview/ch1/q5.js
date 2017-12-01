const oneAway = (a, b) => {
    let edits = 0;
    if (a.length === b.length) {
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) edits++;
        }
    } else {
        edits += Math.abs(a.length - b.length);
    }
    return edits <= 1;
}