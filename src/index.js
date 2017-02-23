module.exports = function flatten(array) {
    if (!Array.isArray(array)) return [];
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            (array[i].length > 0) ? parceMas(array, i): array.splice(i, 1);
            i--;
        }
    }
    return array;
}

function parceMas(array, i) {
    var newArr = array[i].slice();
    array.splice(i, 1);

    for (var j = 0; j < newArr.length; j++) {
        if (Array.isArray(newArr[j]) && newArr.length == 0) {
            newArr.splice(j, 1);
            j--;
        }
    }

    var k = 0;
    while (newArr.length != 0) {
        array.splice(i, 0, (function () {
            return newArr.shift();
        })());
        i++;
        k++;
    }
    return array;
}
