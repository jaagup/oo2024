function massiiviLibisevKeskmine(massiiv){
  var tulemus = [];

  for (var i = 0; i < massiiv.length -2; i++){
    var keskmine = (massiiv[i]+ massiiv[i + 1] + massiiv [i + 2])/3;
    tulemus.push(keskmine);
  }
  return tulemus
}



// Näide kasutamisest:
var sisendmassiiv = [3,4,5,6,7];
var tulemusmassiiv = massiiviLibisevKeskmine(sisendmassiiv);
console.log(tulemusmassiiv); // Väljastab:[ 4, 5, 6 ]

// Koosta funktsioon massiivi libiseva keskmise leidmiseks. Väljundiks on massiiv, mis on sisendist kahe elemendi võrra lühem ning mille iga elemendi väärtuseks on sisendmassiivi vastava elemendi ning selle järgmise ja ülejärgmise elemendi keskmine.