function double(num, callback) {
    const doubleNum = num.map((n) => {
        return callback(n);
    });
    return doubleNum;
}

const arr = [1, 2, 3, 4, 5];

function callback(n) {
    return n * 2;
}

const doubleArray = double(arr, callback);
console.log(doubleArray);
