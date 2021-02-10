function tabmot(str){
    let splitStr = str.split(' ');

    for(let i = 0; i < splitStr.length;i++){
        console.log(splitStr[i]);
    }


}
let string = "le javascript c'est super cool";
tabmot(string);


//function list2phrase(list) {​​
    //let chaine="";
    //for(let mot of list) {​​
    //chaine=chaine.concat(" ",mot);
    //}​​
    //return chaine;
    //}​​




let genAnagramsnumber = (word, n = null, anagram = '', anagrams = []) => {
    if(anagram){
        anagrams.push(anagram);
    }
    if(!word) {
        anagrams.push(anagram);
        return;
    }
    for(let i = 0; i< word.length; i++){
        anagram += word[i];
        genAnagramsnumber(word.slice(0, i) + word.slice(i + 1), n, anagram, anagrams);
        anagram = anagram.slice(0,anagram.length - 1);
    }
    let uniq = [...new Set(anagrams)];
    let hash = {};
    for(let i = 0; i < uniq.length; i++){
        anagram = uniq[i];
        let len = anagram.length;
        if(!(len in hash)){
            hash[len] = [anagram];
        } else {
            hash[len].push(anagram);
        }
    }
    return n === null ? uniq : hash[n];
};

//console.log(genAnagramsnumber('Bonjour',3));


let genAnagrams = (word, anagram = '', anagrams = []) => {

    if(!word) {
        anagrams.push(anagram);
        return;
    }
    for(let i = 0; i< word.length; i++){
        anagram += word[i];
        genAnagrams(word.slice(0, i) + word.slice(i + 1), anagram, anagrams);
        anagram = anagram.slice(0,anagram.length - 1);
    }
    return[...new Set(anagrams)];
};

console.log(genAnagrams('azer'));




