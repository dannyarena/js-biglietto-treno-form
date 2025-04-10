document.getElementById('calcolaBtn').addEventListener('click', function () {
    const km = parseInt(document.getElementById('km').value);
    const eta = parseInt(document.getElementById('eta').value);

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

  document.getElementById('output').textContent = "Il prezzo del tuo biglietto è: " + prezzoFinale + "€";


  });

  