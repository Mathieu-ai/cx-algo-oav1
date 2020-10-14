function howmany () { const phrase = "aDebutDeTexteEtDeFin";
const nbMaj = phrase.match(/[A-Z]/g).length;
console.log(nbMaj);
}

