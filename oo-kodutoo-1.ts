function arvutaSuurimRaskus(pikkus: number, kaal: number, kogemus: 'algaja' | 'kogenud' | 'professionaal'): number {
  let suurimRaskus: number = 0;
  if (kogemus === 'algaja'){
    suurimRaskus = kaal * pikkus / 100;
  } else if (kogemus === 'kogenud'){
    suurimRaskus = kaal * pikkus / 100 * 1.2;
  } else if (kogemus === 'professionaal'){
    suurimRaskus = kaal * pikkus / 100 * 1.5;
  }

  return suurimRaskus;
}

const pikkus   = 180; // näiteks 180 cm
const kaal = 80; // näiteks 80 kg
const kogemus = 'kogenud'; // vali siit 'algaja', 'kogenud' või 'professionaal'

const suurimRaskus = arvutaSuurimRaskus(pikkus, kaal, kogemus);
console.log(`Sinu maksimaalne tõstetav raskus on umbkaudu ${suurimRaskus.toFixed(2)} kg.`);

