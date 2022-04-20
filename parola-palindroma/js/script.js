//Palidroma
//1. Chiedere all’utente di inserire una parola
//2. Creare una funzione per capire se la parola inserita è palindroma
//Bonus: L’inserimento avviene tramite un campo input

//1.Chiedere all’utente di inserire una parola

const parolaInserita= document.getElementById("input-parola").value;
const btn = document.getElementById("submit");
btn.addEventListener("click" , controlloParolaInserita );






function controlloParolaInserita() {
    
    
     const arrParola = parolaInserita.split("");
     const parolaInvertita = parolaInserita.split("").reverse("");
     

    let IsPalindromo = false;

    
    

    for (let i = 0; i < arrParola.length; i++) {
        if(arrParola[i] === parolaInvertita[i]){
            IsPalindromo = true;
        }    
            
    }        
    
    if( IsPalindromo === true){
        document.querySelector("h1").innerHTML = " la parola inserita è palindroma"
    }else{
        document.querySelector("h1").innerHTML = " la parola inserita non  è palindroma"
    }
            
    return IsPalindromo    
        
    

    

    

    

}    
    
   
    

   

  










