//Das wird der Main teil für den Countdown
function countdown(zielDatum) {
  const jetzt = new Date();
  const differenz = zielDatum - jetzt; // Millisekunden
//Wenn der Timer abgelaufen ist
  if (differenz <= 0) {
    return { abgelaufen: true, tage: 0, stunden: 0, minuten: 0, sekunden: 0 };
  }
//Die Restlichen Sekunden
  const gesamtSekunden = Math.floor(differenz / 1000);

  return {
    abgelaufen: false,
    tage: Math.floor(gesamtSekunden / 86400),
    stunden: Math.floor((gesamtSekunden % 86400) / 3600),
    minuten: Math.floor((gesamtSekunden % 3600) / 60),
    sekunden: gesamtSekunden % 60
  };
}
