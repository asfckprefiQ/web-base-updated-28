
export function higherThan(num) {
    return function (item) {
        return item > num;
    };
}

export function hasSubstring(substr) {
    return function (item) {
        return item.includes(substr);
    };
}

export function multiply(num) {
    return function (x) {
        return num * x;
    };
}
