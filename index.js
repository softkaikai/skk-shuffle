function shuffle (arr, createNewArr) {
    if (createNewArr) {
        arr = [].concat(arr);
    }
    var k, j, l = arr.length - 1;

    for (; l > 0; l--) {
        j = Math.floor(Math.random()*l);
        k = arr[l];
        arr[l] = arr[j];
        arr[j] = k;
    }
    return arr;
}


module.exports = shuffle;
