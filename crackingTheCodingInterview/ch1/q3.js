const URLify = (str, len) => {
    let res = "";
    for (let i = 0; i < len; i++) {
        if (str[i] === ' ') res += "%20";
        else res += str[i];
    }
    return res;
}