// 1. chiedi all’utente il cognome
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
// (facciamo questo in 2 versioni: col ciclo for e col while)



// dichiarazione variabili
var cognomeDaAggiungere = prompt('dimmi il tuo nome')
var arrayCognomi = [
    'rossi', 
    'ferrari', 
    'russo', 
    'bianchi', 
    'romano',
    'gallo',
    'costa', 
    'fontana',
]
var counter = 0
var cognome = false;
var numero = 1

// ciclo while per assicurarci che l'utente inserisca il proprio cognome
while ( cognomeDaAggiungere.length == 0 ){
    cognomeDaAggiungere = prompt('ripeti')
}
// push del cognome nell'array
arrayCognomi.push(cognomeDaAggiungere)

// per ordinare il contenuto dell'array alfabeticamente
arrayCognomi.sort()

// per inserire gli elementi dell'array dentro una lista html
for( var i = 0 ; i < arrayCognomi.length; i++ ) {;
    document.getElementById('lista').innerHTML += '<li>' + arrayCognomi[i] + '</li>';
    console.log(i);
}
// per dire all'utente la posizione in cui si trova dentro la lista
while( cognome == false && counter < arrayCognomi.length ) {

    if( arrayCognomi[counter] == cognomeDaAggiungere ) {
        cognome = true;
        // per inviare il messaggio all'utente
        alert('ciao' + cognomeDaAggiungere + 'sei il numero ' + numero + 'della lista')
    }
    counter++;
    numero++;
}




