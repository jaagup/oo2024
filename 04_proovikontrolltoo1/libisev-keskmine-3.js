class LibisevKeskmine {
  constructor() {
      this.arvud= [];
      this.summa = 0;
  }

  lisaArv(arv) {
      this.arvud.push(arv);
      this.summa += arv;
  }

  keskmised() {
      var keskmised = [];
      var n = this.arvud.length;

      if (n < 3) {
          return keskmised; // Tagastab tühja massiivi, kui on vähem kui 3 arvu
      }

      var algusSumma = this.summa - this.arvud[n - 1] - this.arvud[n - 2];

      for (var i = 0; i < n - 2; i++) {
          algusSumma += this.arvud[i + 2];
          keskmised.push(algusSumma / 3);
          algusSumma -= this.arvud[i];
      }

      return keskmised;
  }
}

// Näide kasutamisest:
var proov = new LibisevKeskmine();
proov.lisaArv(1);
proov.lisaArv(2);
proov.lisaArv(3);
proov.lisaArv(4);
console.log(proov.keskmised()); 
proov.lisaArv(6);
console.log(proov.keskmised());
