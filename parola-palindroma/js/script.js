//Palidroma
//1. Chiedere all’utente di inserire una parola
//2. Creare una funzione per capire se la parola inserita è palindroma
//Bonus: L’inserimento avviene tramite un campo input

//1.Chiedere all’utente di inserire una parola

let parolaInserita= document.getElementById("imput-parola").value;
let parolaInvertita;
let arrParola;


document.getElementById("submit").addEventListener("click" , controlloParolaInserita );


function controlloParolaInserita(params) {
    
    
    arrParola = parolaInserita.split("");
    parolaInvertita = parolaInserita.split("").reverse("");
    console.log(arrParola);
    console.log(parolaInvertita); 
    

    for (let i = 0; i < arrParola.length; i++) {
        if(arrParola[i] === parolaInvertita[i]){
            console.log("palindroma");
        }else{
            console.log("non Palindroma");
        }

        
        
    }
    return
   
    

   

  
}









