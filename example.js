var n = 5;
var m = 2;
var s = 2;
function saveThePrisoner(n, m, s) {
    var prisioner;
    var module = m%n;
    console.log("Module: " + module);
    var start = s-1;
    console.log("start: " + start);
    prisioner = start + module;
    if (module == 0 && prisioner>0) {
        return prisioner;
    } 
    else if(module == 0 && prisioner==0){
        return n;
    }
    else {
        if (prisioner>n) {
            var temp = prisioner - n;
            return temp;
        }
        else{
        return prisioner;
        }
    }
}
console.log(saveThePrisoner(3,262945527,1));//3
