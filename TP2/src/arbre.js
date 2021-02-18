


class arbre {
    constructor(arbreJson){
        this.nom = arbreJson["NOM COMMUN"];
        this.annee = arbreJson["ANNEE PLANTATION"];
        this.id = arbreJson.OBJECTID;
        this.geo = new Point(arbreJson["Geo point"]);
    }

    toString(){
        return this.id+" : "+this.nom;
    }
  
}
class Point{
    constructor(latlng){
        const split = latlng.split(", ");
        this.latitude = latlng[0];
        this.longitude = latlng[1];
    }
}





let arbres = [];

function count(){
    return arbres.length;
}

function arrondissement(arrond){
    return arbres.filter(arbre => arbre[ARRONDISSEMENT]) === arrond;
   
}

arrondissement("16");

function objid(arrond){
    for(let i=0; i<count();i++){
        if(arbres[i].ARRONDISSEMENT===arrond){
            console.log(arbres[i].OBJECTID);
        }
    }
}

function question4(arrond){
    for(let i=0;i<count();i++){
        if(arbres[i].ARRONDISSEMENT===arrond){
            console.log(arbres[i].OBJECTID+" "+arbres[i]["NOM COMMUN"]+" "+arbres[i]["ANNEE PLANTATION"]);
        }
    }
}

function vieux(arrond){
    let older = 2099;
    let arbre;
    for(let i=0; i<count();i++){
        if(parseInt(arbres[i]["ANNEE PLANTATION"])<older){
            older=parseInt(arbres[i]["ANNEE PLANTATION"]);
            arbre=arbres[i];
        }
    }
    return arbre;
}

function vieuxdu16(arrond){
    let older = 2099;
    let arbre;
    for(let i=0; i<count();i++){
        if(arbres[i].ARRONDISSEMENT===arrond){
            if(parseInt(arbres[i]["ANNEE PLANTATION"])<older){
                older=parseInt(arbres[i]["ANNEE PLANTATION"]);
                arbre=arbres[i];
            }
        }
    }
    return arbre;
}

function moyage16(arrond){
    let arbre;
    let annee = 2021;
    let moy;
    for(let i=0;i<count();i++){
        if(arbres[i].ARRONDISSEMENT===arrond){
            
        }
    }
}



