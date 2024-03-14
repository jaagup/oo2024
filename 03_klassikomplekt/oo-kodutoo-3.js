class Eksemplar {
  constructor(id, name) {
      this._id = id;
      this._name = name;
  }

  get id() {
      return this._id;
  }

  get name() {
      return this._name;
  }

  set name(name) {
      this._name = name;
  }
}

class Hoidla {
  constructor() {
      this._eksemplarid = [];
  }

  lisaEksemplar(eksemplar) {
      this._eksemplarid.push(eksemplar);
  }

  loeEksemplarid() {
      return this._eksemplarid;
  }
}

// Näidisrakendus
const hoidla = new Hoidla();

const eksemplar1 = new Eksemplar(1, "Eksemplar 1");
const eksemplar2 = new Eksemplar(2, "Eksemplar 2");

hoidla.lisaEksemplar(eksemplar1);
hoidla.lisaEksemplar(eksemplar2);

const eksemplarid = hoidla.loeEksemplarid();
console.log("Hoidla eksemplarid:");
eksemplarid.forEach((eksemplar) => {
  console.log(`ID: ${eksemplar.id}, Nimi: ${eksemplar.name}`);
});
