module.exports = function getZerosCount(number, base) {

    let arr = [];
    let zerosCount = 0;
    i = 2;
    let j = 0;
    let factor = 0;
    let countFactor = 0;
    if ( base > 2) {
    do {
        if (base % i == 0){
            a = base / i;
            arr.push(i);
            base = a;
        }
        else i++;
    }
    while (i < base);
     arr.push(i);
    
    factor = Math.max.apply(null, arr);

    for (j; j < arr.length; j++){
        if (arr[j] == factor) countFactor++;
        }
    }
    else {
    factor = base;
    countFactor = 1;
    }

    for (let i = factor; number / i >= 1; i *= factor){
        zerosCount += Math.floor(number / i);
    };
    return Math.floor(zerosCount / countFactor);
}