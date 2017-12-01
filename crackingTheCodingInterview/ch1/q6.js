const stringCompression = (str) => {
    if (!str || str.length <= 2) return str;
    str = str.toLowerCase();

    let count = 1;
    let res = str[0];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i+1]) count++;
        else {
            if (!!str[i+1]) {
                res += count.toString() + str[i+1];
                count = 1;
            } else {
                res += count.toString();
            }
        }
    }

    return res.length < str.length ? res : str;
}