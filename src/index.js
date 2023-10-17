//PRIMITIFS
//let a été introduit avec ES6
let test = "123";
// declaration
//string
const name = 'Jean';
console.log(typeof name)
//nombre
const age = 18;
console.log(typeof age)
//null
const hobbies = null;
console.log(typeof hobbies)
//undefined
let action
console.log(typeof action)
//symbole
let dym = Symbol()
console.log(typeof dym)
//boolean
let actif = true
console.log(typeof actif)

//OBJETS
//objet litteral
const ville = {
    name: "Paris",
    state: "France"
};
//objet fonction
const greetingd = function() {
    console.log('Hello')
}
//objet date
const today = new Date()
//objet array
const arr = [1,2,2]

//Précédence 
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Operator_precedence
let a = 2 + 2 * 6 / 2;