// les fonctions sont des objets

// déclaration de fonction
function func(params) {
    console.log("func exec");
}
func();

//expression de fonction
const fn = function func2() {
    console.log("func 2 exec");
}
fn();
//fonction anonyme
const fn2 = function() {
    console.log("func 3 exec");
}
console.log(fn.name); //func2
console.log(fn2.name); //fn2

function fnToUp(param = "default") {
    //avt ES6 param = param || 'default';
    //depuis ES6 (param = 'default')


    console.log(param.toUpperCase());
};

fnToUp("test");

function add(){
    //console.log(arguments);
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
       total += arguments[i];
        
    }
    console.log(total);
}

add(1,2,3,4);

function add2(operateur,...numbers){
    let total = 0;
    if (operateur === "+") {
        for (let i = 0; i < numbers.length; i++) {
            total += numbers[i];
             
         }
    }
   
    console.log(total);
}

add2("+",1,2,3)