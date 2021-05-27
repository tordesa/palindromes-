function palindrome(str) {
    if (str === "") {
        return "input can't be empty";

    }
    let len = str.length;
    let mid = Math.floor(len / 2);

    for (let i = 0; i < mid; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(palindrome(""));
