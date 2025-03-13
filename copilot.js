// create a function that takes a s string and returns the number of vowels in that string

function vowels(s){
    let count = 0;
    let vowels = 'aeiou';
    for(let char of s.toLowerCase()){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;


}
var 