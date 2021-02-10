class  Animal {
    constructor(nom) {
        this.nom = nom;
    }
    parle() {
        console.log(this.nom + ' fait du  bruit.');
    }
}
            
let  milou = new  Animal("Milou");
let  snowy = new  Animal("Snowy");

console.log(milou.__proto__); // Tout  objet "a" un  objet  que l’on  nomme  prototype.

// Est -ce que  milou  et snowy  sont  identiques ? Non
console.log(milou  ===  snowy) ;

// Est -ce que  milou  et snowy  ont le meme  prototype ? Oui
console.log(milou.__proto__  ===  snowy.__proto__) ;

// Qu’est -ce que le  prototype  de milou ? C'est le prototype d'Animal
console.log(milou.__proto__  ===  Animal.prototype);

/*
Animal hérite d'Objet, parle() hérite de function() qui hérite d'Objet
*/

/*
ça permet de définir un objet qui hérite de la classe objet
*/