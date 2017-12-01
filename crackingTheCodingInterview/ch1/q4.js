const isPalindrome = (str) => {
    str = str.toLowerCase();
    const hash = new Set();
    for (let letter of str) {
        if (letter !== ' ') {
            if (hash.has(letter)) hash.delete(letter);
            else hash.add(letter);
        }
    }
    return hash.size <= 1;
}