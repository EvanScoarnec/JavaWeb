let  nyc = {
    nom: "New  York  City",
    maire: "Bill de  Blasio",
    population: 8000000 ,
    quartiers: 5
};

let proprietes = Object.getOwnPropertyNames(nyc); //On peut aussi utiliser : Object.keys(nyc);
for(let i=0;i<proprietes.length;i++){
    console.log(proprietes[i]);
}