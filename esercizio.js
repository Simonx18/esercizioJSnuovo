// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
    name: "Marco",
    lastName: "Rossi",
    isAmbassador: true,
  }
  
  const paul = {
    name: "Paul",
    lastName: "Flynn",
    isAmbassador: false,
  }
  
  const amy = {
    name: "Amy",
    lastName: "Reed",
    isAmbassador: false,
  }
  
  const prices = [34, 5, 2]
  const shippingCost = 50
  



  // Array di utenti
var users = [paul, marco, amy];

// Aggiungi utenti all'array
users .push({ userName: "Paul", isAmbassador: true });
users .push({ userName: "Marco", isAmbassador: false });
users .push({ userName: "Amy", isAmbassador: true });


// creerei una funzione che calcola il costo totale
// legenda: listPrice sarà il costo del carrello, user sarà l'utente, shippingCosts sarà il costo di spedizione

function calculateCart(listPrice, user, shippingCosts) {
    // qui farei un if per controllare se l'utente è ambassador
    // e se è ambassador applico lo sconto, quindi farò listPrice = listPrice * 0.7 (così si calcola lo sconto)
    if (user.isAmbassador) {
      listPrice = listPrice * 0.7;
    }
    
    // farei un altro if per controllare se il prezzo del carrello supera i 100
    // e se lo supera imposto shippingCosts = 0 (così azzero la spedizione)
    if (listPrice > 100) {
      shippingCosts = 0
    }


    // infine calcolo il costo del carrello
    // banalmente un 
  return listPrice + shippingCosts;
};


// qui il tuo ciclo for per stampare chi è ambassador
// fai il ciclo for sull'array utenti che hai in alto, non serve altro.
for (let i = 0; i < users.length; i++) {
  const utente = users[i];
  if (utente.isAmbassador) {
    console.log(`${utente.name} ${utente.lastName} è un utente Ambassador!`);
  } else {
    console.log(`${utente.name} ${utente.lastName} non è un utente Ambassador.`);
  }
  
}

// mi creerei le tre variabili che mi servono per calcolare il carrello
const listPrice = 150
const actualUser = paul // cambia indice per cambiare utente
const shippingCosts = 10 // costo di spedizione

const total = calculateCart(listPrice, actualUser, shippingCosts); // chiamo la funzione
console.log(total); // stampo il totale



// è giusto così? non sono tanto sicuro del risutato...
// impostato così come mi ha fatto vedere è già più semplice da comprendere rispetto alla soluzione che ho visto

// P.S.
// mi scuso per aver "preso spunto" dalla soluzione... questo compito mi è venuto davvero difficile e sono andato nel panico.
// grazie per avermi dato dei consigli utili