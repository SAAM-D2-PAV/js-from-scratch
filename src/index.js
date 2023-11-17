const b = {
    name: "Mathieu",
    lastname: "Le Ray"
};

function bonjour(lang) {
    if (lang === "fr") {
        console.log(`bonjour: ${this.name + this.lastname}`);
    }
    else{
        console.log(`hello: ${this.name + this.lastname}`);
    }
    
}
bonjour(b) // undefined
bonjour.call(b, "fr") // bonjour MAthieuLe ray
bonjour.apply(b, ["fr"]) // idem mais on passe un array en parametres - bonjour MAthieuLe ray

const c = bonjour.bind(b);
c("fr");

const a = param => {
    console.log(param);
}

const d = (param1, param2) => {
    console.log(param1);
    console.log(param2);
}
const e = (a, b) => a + b;

console.log(e(1, 2));

// Les closures
const f = () => {
    let arr = [];
    for (var index = 0; index < 3; index++) {
        arr.push(function() {
            console.log(index);
        })
    }
    return arr;
}

const tab = f();

tab[0]();
tab[1]();
tab[2]();