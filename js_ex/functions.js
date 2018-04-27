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

function printReversed(list) {
    var maxIndex = list.length - 1;
    list.forEach(function(element){
        var index = list.indexOf(element);
        console.log(list[maxIndex-index]);
    })
}

function isUniform(list) {
    var buff = list[0];
    for (var el in list) {
        console.log (list[el], buff)
        if(list[el] !== buff) {
            return false;
        } else {
            buff = list[el];
        }
    }
    return true;
}


//          isUniform test
// console.log(isUniform([1,1,1,1]));
// console.log(isUniform([1,2,1,1]));
// console.log(isUniform(["a","a","a"]));
// console.log(isUniform(["a","b","b","b"]));

//!!        printReversed test
// printReversed([1,2,3,4,5,6]);
// printReversed(["one","two","three"]);



// //expect true
// console.log(isEven(2));
// //expect false
// console.log(isEven(111));
// //expect 1
// console.log(factorial(0));
// //expect 7!
// console.log(factorial(7));
// console.log(1*2*3*4*5*6*7);
// //expect i_love_kebab
// console.log(kebabToSnake("i-love-kebab"));
