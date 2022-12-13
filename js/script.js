/* ESERCIZIO 1 - Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampiamo in pagina i due tiri e il risultato
-----------------------------------------------------------------
ESERCIZIO 2 - Finta Login
Inventa una lista di email autorizzate
Chiedi all’utente la sua email, con un piccolo form.
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */


/********************** FIRST EXERCISE ************************/
const cpuNumber = document.getElementById('cpu-number');
const userNumber = document.getElementById('user-number');
const result = document.getElementById('result');
const button = document.getElementById('randomizer');
const clearButton = document.getElementById('clearer');


button.addEventListener('click', function(){
    const randomNumberCpu = Math.floor((Math.random() * 6) + 1);
    const randomNumberUser = Math.floor((Math.random() * 6) + 1);

    cpuNumber.innerText = ` ${randomNumberCpu}`;
    userNumber.innerText = ` ${randomNumberUser}`;
    let message = ` User, congratulazioni!`;
    
    if (randomNumberCpu > randomNumberUser){
        message = ` Cpu, ritenta!`;
    } else if (randomNumberCpu === randomNumberUser){
        message = ` Pareggio!`;
    }

    result.innerText = message
});

clearButton.addEventListener('click', function(){
    cpuNumber.innerText = '';
    userNumber.innerText = '';
    result.innerText = '';
});


/********************** SECOND EXERCISE ************************/

