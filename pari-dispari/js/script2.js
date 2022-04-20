//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.
//Bonus: L’inserimento avviene tramite un campo input


const pariDispari = document.getElementById("pari-dispari").value;
const numeroPlayer = parseInt(document.getElementById("numero-inserito").value);
const numeroPc = numeroRandom(1,5);
const somma = numeroPlayer + numeroPc;
document.querySelector("h1").innerHTML = `${somma} è ${controlloSomma(somma)} `;
console.log(pariDispari);
console.log(numeroPlayer);
console.log(numeroPc);
console.log(somma);


if(pariDispari =="pari" && somma % 2 === 0){
    document.getElementById("vincitore").innerHTML = "HAI VINTO";
}else if (pariDispari == "dispari" && somma % 2){
    document.getElementById("vincitore").innerHTML = "HAI VINTO";
}else{
    document.getElementById("vincitore").innerHTML = "HAI PERSO";
}



//funzione numero random pc
function numeroRandom(min,max) {
    return Math.floor(Math.random()* (max-min + 1) + min);
    
}

//funzione per stabilire se la somma dei due numeri è pari o dispari

function controlloSomma(num) {
    let risultato;
    if( num % 2 === 0){
        risultato = "pari";

    }else{
        risultato = "dispari";
    }

    return risultato;
    
    
}
