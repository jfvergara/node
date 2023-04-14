
const n = 50;

function viralAdvertising(n) {
    var shared = 5;
    var liked = 0;
    var cumulative = 0;
    for (let i = 1; i < n+1; i++) {
        liked = Math.floor(shared/2);
        cumulative = cumulative + liked;
        shared = liked*3;
    }
    console.log(cumulative);
    return cumulative;
}

viralAdvertising(n);
// const quotient = Math.floor(6/2);
// console.log(quotient);