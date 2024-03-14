class Nelinurk{
  constructor(){
    this.küljepikkused = [];
  }

  lisaKülg(pikkus){
    this.küljepikkused.push(pikkus);
  }

  küljepikkusteSumma(){
    return this.küljepikkused.reduce((summa, pikkus) => summa + pikkus, 0);
  }

  trükiAndmed(){
    console.log("Küljepikkused: ", this.küljepikkused);
  }
}

// Loome nelinurga
const nelinurk = new Nelinurk();

// Lisame küljapikkused
nelinurk.lisaKülg(1);
nelinurk.lisaKülg(4);
nelinurk.lisaKülg(8);
nelinurk.lisaKülg(6);

// Trükime nelinurga andmed välja
nelinurk.trükiAndmed();

// Arvutame ja trükime nelinurga ümbermõõdu
console.log("Nelinurga ümbermõõt:", nelinurk.küljepikkusteSumma());
