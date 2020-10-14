/*
const phrase = "aDebutDeTexteEtDeFin";
const count = phrase.match(/[A-Z]/g).length;
console.log(count);
*/


function howManyCamelCase(str) {
    const phrase = "aDebutDeTexteEtDeFin";
  
    for (let i = 0; i < str.length; i++) {
        const count = phrase.match(/[A-Z]/g).length;
        console.log(count);
    } 
}
  console.log(howManyCamelCase('0'))



  