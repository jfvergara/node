// q: how to create a function in order to solve the following problem? There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
// example: n = 7, ar = [1,2,1,2,1,3,2] => 2 pairs  of socks


// This funnction returns the number of pairs of socks given an array of integers representing the color of each sock
function sockMerchant(n, ar) {
    //the variable pairs is the number of pairs of socks
    var pairs = 0;
    var sorted = ar.sort();
    console.log(sorted);
    // the for loop iterates through the array of integers that are sorted
    for (var i = 0; i < n; i++) {
        // if the current element is equal to the next element, then we have a pair of socks
        if (sorted[i] == sorted[i + 1]) {
            // we increment the variable pairs
            pairs++;
            // we need to skip the next element because we already counted it
            i++;
        }
    }
    return pairs;
}



var n = 7;
var ar = [1, 2, 1, 2, 1, 3, 2];
console.log(sockMerchant(n, ar));