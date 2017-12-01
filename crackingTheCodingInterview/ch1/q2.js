const checkPermutation = (str0, str1) => {
    if (str0.length !== str1.length) return false;
    else return (str0.split('').sort() === str1.split('').sort());
}