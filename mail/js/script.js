//1 - creare un array con una lista di email 
const list = ['pippo@gmail.com', 'paperino@icloud.it', 'topolino@yahoo.it'];
//2 - chiere all'utente di inserire una email vailda
const user_email = document.getElementById('email').value
//3 - confrontare se la mail inserita fa parte della lista dell'array
//3.1 - creare un cilo for di ricerca per la lista dell'array
//3.2.1 - se le email corrispondono stampare "Puoi partecipare"

//bonus
const check = document.getElementById('check');

check.addEventListener('click', function(){
    let user_email = document.getElementById('email').value;
    
    let found = false;
    for ( i=0; i < list.length; i++){
        //3.2 - creare la variabile della singola mail della lista dell'array e confrontarla con la mail inserita dall'utente 
        const email = list[i]
        if ( user_email === email) {
            found = true
        }
    }
    
    if(found) {
        console.log('Puoi partecipare');
        document.getElementById('success').innerHTML = 'Email esatta, accesso consentito'
        document.getElementById('danger').innerHTML = ''
    }
    //3.2.2 - se non corrispondono stampare "Non puoi partecipare"
    else {
        console.log('Non puoi partecipare');
        document.getElementById('danger').innerHTML = 'Email errata, ATTENZIONE INFORMAZIONI A RISCHIO!'
        document.getElementById('success').innerHTML = ''
    }
    
})