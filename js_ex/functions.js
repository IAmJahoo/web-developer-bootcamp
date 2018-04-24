function isEven(value) {
    if (value % 2) {
        return false;
    }
    return true;
}

function factorial(value) {
    if (value===0 ||value ===1) {
        return 1;
    }
    else if(typeof(value)=="number"){
        var tmp = 1;
        for (i=2; i<=value; i++){
            tmp = tmp*i;
        }
        return tmp;
    }
    else {
        alert("Please, type a number!")
    }
}

function kebabToSnake(kebabString){
    return kebabString.replace(/-/g, "_");
}

//expect true
console.log(isEven(2));
//expect false
console.log(isEven(111));
//expect 1
console.log(factorial(0));
//expect 7!
console.log(factorial(7));
console.log(1*2*3*4*5*6*7);
//expect i_love_kebab
console.log(kebabToSnake("i-love-kebab"));