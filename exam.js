// write program to find second largest number from array = {2, 88, 23, 12, 67, 90, 78, 65, 33, 46, 52, 62, 80}
var arrayExam = [2, 88, 23, 12, 67, 90, 78, 65, 33, 46, 52, 62, 80]

var minnor = 0;
var maxNumber = 0;
var secondLargest = 0;
var temporalArray = [];

function getMaxNumber(array) {

    for (let i = 0; i < arrayExam.length; i++) {
        const element = array[i];
        if (element > minnor) {
            maxNumber = element;
            minnor = element;
            temporalArray.push(maxNumber);
        } else {
            continue;
        }
    }
    console.log(temporalArray);
    return temporalArray[temporalArray.length - 2];
}

var printer = getMaxNumber(arrayExam)
console.log(printer);