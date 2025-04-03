
// PRELIEVO DEI FORM ID

document.getElementById('total-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const tipoLavoroSelezionato = document.getElementById('typework').value;
  
    const codicePromozionaleInserito = document.getElementById('promozione').value;

    const risultatofinale = document.getElementById('result').querySelector('div:last-child');
  
    // PREZZO PER OGNI TIPO DI LAVORO
    const PrezziLavori = {
      'backed Development': 20.50,
      'frontend Development': 15.30,
      'project Analysis': 33.60
    };
  
    // CODICI PROMOZIONALI 25% SCONTO
    const codiciPromozionaliValidi = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];
  
    // NUMERO DI ORE PER OGNI LAVORO
    const oreDiLavoro = 10;
  
    // CALCOLO DEL PREZZO TOTALE SENZA SCONTO

    let prezzoTotale = oreDiLavoro * PrezziLavori[tipoLavoroSelezionato];
  
    // variabile per verificare se il codice promozionale è valido
    let codiceValido = false;
  
    // se il codice promozionale inserito è valido
    for (let i = 0; i < codiciPromozionaliValidi.length; i++) {
      // Se il codice inserito corrisponde a uno dei codici validi
      if (codiciPromozionaliValidi[i] === codicePromozionaleInserito) {
        // Impostiamo la variabile codiceValido a true
        codiceValido = true;
        // Esci dal ciclo 
        break;
      }
    }
  
    // SE IL CODICE PROMOZIONALE E' VALIDO APPLICHIAMO LO SCONTO DEL 25%
    if (codiceValido) {
      prezzoTotale = prezzoTotale * 0.75;
      risultatofinale.innerHTML = `<strong style="font-size: 1.2em;">PREZZO FINALE ${prezzoTotale.toFixed(2)}€</strong>`;
    }
    // ALTRIMENTI, SE IL CODICE SCONTO E' ERRATO
    else if (codicePromozionaleInserito) {
      risultatofinale.innerHTML = `<strong style="color: red;">!ATTENZIONE CODICE PROMOZIONALE NON VALIDO!. PREZZO FINALE € ${prezzoTotale.toFixed(2)}</strong>`;
    }
    // SE INVECE NON E' STATO INSERITO NESSUN CODICE SCONTO
    else {
      risultatofinale.innerHTML = `<strong style="font-size: 1.2em;">PREZZO FINALE ${prezzoTotale.toFixed(2)}€</strong>`;
    }
  });