const km = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
const eta = parseInt(prompt("Quanti anni hai?"));

const prezzoBase = km * 0.21;

let prezzoFinale

if (eta < 18) {
    prezzoFinale = prezzoBase * 0.8;
  } else if (eta > 65) {
    prezzoFinale = prezzoBase * 0.6;
  } else {
    prezzoFinale = prezzoBase;
  }

  prezzoFinale = prezzoFinale.toFixed(2);

  console.log("Il prezzo del tuo biglietto è: " + prezzoFinale + "€");