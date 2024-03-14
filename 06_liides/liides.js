// Defineeri liides
class Kuju {
  arvutaPindala() {
    throw new Error('Meetodit pole rakendatud');
  }

  arvutaÜmbermõõt() {
    throw new Error('Meetodit pole rakendatud');
  }
}

// Realiseeri klassid
class Ring extends Kuju {
  constructor(raadius) {
    super();
    this.raadius = raadius;
  }

  arvutaPindala() {
    return Math.PI * this.raadius ** 2;
  }

  arvutaÜmbermõõt() {
    return 2 * Math.PI * this.raadius;
  }
}

class Ristkülik extends Kuju {
  constructor(laius, kõrgus) {
    super();
    this.laius = laius;
    this.kõrgus = kõrgus;
  }

  arvutaPindala() {
    return this.laius * this.kõrgus;
  }

  arvutaÜmbermõõt() {
    return 2 * (this.laius + this.kõrgus);
  }
}

// Näitekasutus
const ring = new Ring(5);
console.log('Ringi pindala:', ring.arvutaPindala().toFixed(2));
console.log('Ringi ümbermõõt:', ring.arvutaÜmbermõõt().toFixed(2));

const ristkülik = new Ristkülik(4, 6);
console.log('Ristküliku pindala:', ristkülik.arvutaPindala().toFixed(2));
console.log('Ristküliku ümbermõõt:', ristkülik.arvutaÜmbermõõt().toFixed(2));
