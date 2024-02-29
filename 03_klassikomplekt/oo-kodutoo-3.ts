class Eksemplar {
  private _id: number;
  private _name: string;

  constructor(id: number, name: string) {
      this._id = id;
      this._name = name;
  }

  get id(): number {
      return this._id;
  }

  get name(): string {
      return this._name;
  }

  set name(name: string) {
      this._name = name;
  }
}

class Hoidla {
  private _eksemplarid: Eksemplar[];

  constructor() {
      this._eksemplarid = [];
  }

  lisaEksemplar(eksemplar: Eksemplar): void {
      this._eksemplarid.push(eksemplar);
  }

  loeEksemplarid(): Eksemplar[] {
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
