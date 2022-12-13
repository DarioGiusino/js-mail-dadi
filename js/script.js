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
// definisco lista e recuper elementi dal dom
const authEmails = ['dario@primo.it', 'dario@secondo.it', 'dario@terzo.it'];
const emailField = document.getElementById('exampleInputEmail1');
const loginButton = document.getElementById('login');
const loginMessage = document.getElementById('login-message');

// verifica del login al click del button
loginButton.addEventListener ('click', function(){
    // recupero valore dell'email inserita
    const userEmail = emailField.value.trim();

    // validazione mail inserita
    if (!userEmail){
        loginMessage.innerText = 'Non hai inserito una mail valida';
        return;
    }

    // giro nella lista di mail autorizzate per verificare se la mail inserita è tra queste con aiuto di variabile di appoggio
    let isAuth = false;

    for (let i = 0; i < authEmails.length && !isAuth; i++){
        const currentEmail = authEmails[i];
        if (currentEmail === userEmail){
            isAuth = true;
        }
    }

    // una volta letta la lista, scrivo messaggio a schermo a seconda di quanto riscontrato
    let loginText;

    if (isAuth){
        loginText = 'Puoi accedere al sito, benenuto!'
    } else {
        loginText = 'Spiacente, non hai i permessi per accedere.'
    }

    /* Versione ternario
    const loginText = isAuth ? 'Puoi accedere al sito, benenuto!' : 'Spiacente, non hai i permessi per accedere.'; */

    loginMessage.innerText = loginText;
});


