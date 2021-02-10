function  Rectangle (){
    // un  constructeur  qui  peut  prendre  en  entree 2 nombres
    // _data  est un  stockage  interne  des  valeurs  de  proprietes
    this._data =[ arguments [0], arguments [1]];
}

r={
    long:{
        get: function () {
            if(this._data[0]>=this._data[1]){
                return  this._data [0];
            } else {
                return  this._data [1];
            }
        },
        set: function(x) {
            if(this._data[0]>=this._data[1]){
                this._data [0]=x;
            } else {
                this._data [1]=x;
            }
        }
    },
    larg:{
        get: function () {
            if(this._data[0]<=this._data[1]){
                return  this._data [0];
            } else {
                return  this._data [1];
            }
        },
        set: function(y) {
            if(this._data[0]<=this._data[1]){
                this._data [0]=y;
            } else {
                this._data [1]=y;
            }
        }
    },
    perimetre : {
        get: function () {
            return (this._data [0]+ this._data [1]) *2;
        }
    },
    aire : {
        get: function () {
            return (this._data [0]* this._data [1]);
        }
    }
};

Object.defineProperties(Rectangle.prototype ,r);

let  rex = new  Rectangle (10,5);
console.log("Aire = "+rex.aire); // get

rex.long = 20; // set
console.log("Aire : "+rex.aire);

console.log(rex.long);
console.log(rex.larg);