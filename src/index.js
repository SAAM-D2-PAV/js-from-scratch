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

const terre = {
    population: 7e7,
    satellite: 'Lune',
    temperature: {
        min: -70,
        max:60
    },
    isOld:false,
    //method (fonction qui appartient à un objet)
    getTemperature: function () {
        console.log("15");
    },
    // équivaut à 
    getTemperatures() {
        console.log("15");
    }
}
//dote notation
console.log(terre.population);
//crochets
console.log(terre['satellite']);

const prop = "temperature";
console.log(terre[prop]);
terre.getTemperature();
//depuis ES6 on déclare les propriétés d'objet via des constantes
const population = 7e7;
const satellite = "Lune";
const température = {
    min: -70,
    max: 60
};

const pop = "population";
// l'objet en question
const planet = {
    [pop] : population,
    satellite,
    température,
    isOld: false
}


console.log(planet);

const prop1 = "Test";
const prop2 = "concaténation";
const monObjet = {
  [`${prop1} + ${prop2}`]: "pratique !",
};

//décomposition d'objet + alias
//const { population: populationTerre, satellite: satelliteTerre, temperature } = planet;
//spead
const {temperature: tempearturePlanet} = planet;

console.log(planet);

const terre1 = {
    population: 7e7,
    satellite: "Lune"
};

const terre2 = {
    temperature: {
        min: -70,
        max: 60
    }
}
//pour eviter de merge terre2 dans terre1 on merge dans des {}
console.log(Object.assign({}, terre1, terre2));
//ou mieux
const terre3 = {...terre1, ...terre2}
//deep copie -> parse json.stringify
//impossible à réaliser avec des fonctions dans l'objet
const a2 = {
    name: 'Toto',
    foo: {
        bar:'zoo'
    }
};
const c2 = JSON.parse(JSON.stringify(a2))
////////////////////////////////
// stack                heap

// const a = xxx          xxx {}
// const b = yyy          yyy {}
// const c = yyy

// const a = {}
// const b = {}
// const c = b;
// console.log(a === b);

const obj1 = {
    a: "un",
    b: "deux",
    c: "trois"
  };
  
  for (const prop in obj1) {
    console.log(prop);
    console.log(obj1[prop]);
  }

  console.log(Object.keys(obj1));
  console.log(Object.values(obj1));
  console.log(Object.entries(obj1));

  const obj2 = {
    firstname: 'Mathieu',
    lastname: 'Le Ray',
    age: 37
  }
  //objet vers json
  console.log(JSON.stringify(obj2));
  //json vers objet
  console.log(JSON.parse('{"firstname": "Mathieu", "lastname":"Le Ray"}'));