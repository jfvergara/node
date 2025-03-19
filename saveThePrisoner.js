var n = 4;
var m = 6;
var s = 2;

function saveThePrisoner(n, m, s) {
    var newArray = createArray(n);
    var newArrayLenght = newArray.length;
    var pointer = s;
    var times = 0;
    while (m>0) {
        times ++;
        if (m == 1) {
            break;
        }
        else if (pointer == newArrayLenght) {
            pointer = 1;
            m = m-1;
        } else {
            m = m-1;
            pointer ++;
        }
    }
    console.log(newArray[pointer-1]);

    return newArray[pointer-1];
}

function createArray(size) {
    var newArray = [];
    for (let i = 1; i < size+1; i++) {
        newArray.push(i)     ;   
    }
    return newArray;
}


saveThePrisoner(559033664,822024089,131746755);