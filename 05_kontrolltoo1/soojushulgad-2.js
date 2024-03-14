class Ese{
  constructor(nimi, mass, temperatuur, Aine){
    this.nimi = nimi;
    this.mass = mass;
    this.temperatuur = temperatuur;
    this.Aine = Aine;
  }
}

class Ladu {
  constructor(){
    this.esemed = [];
  }

  lisaEse (nimi, mass, temperatuur, Aine){
    const uusEse = new Ese(nimi, mass, temperatuur, Aine);
    this.esemed.push(uusEse);
  }

  muudaEse (nimi, uusMass, uusTemperatuur, uusAine){
    const muudaEsemet = this.esemed.find(e => e.nimi === nimi);
    if(muudaEsemet){
      muudaEsemet.mass = uusMass;
      muudaEsemet.temperatuur = uusTemperatuur;
      muudaEsemet.Aine = uusAine;
    }else{
      console.log("Esemeid nimega " + nimi + "ei leitud.");
    }
  }

  kustutaEse (nimi){
    this.esemed = this.esemed.filter(e => e.nimi !== nimi);
  }

  kogumassAine(Aine){
    let kogumass = 0;
    this.esemed.forEach(e => {
      if (e.Aine === Aine){
        kogumass += e.mass;
      }
    });
    return kogumass;
  }
}

//Näide

const ladu = new Ladu();

ladu.lisaEse("Pall", 1, 25, "Kumm");
ladu.lisaEse("Raamat", 2, 20, "Paber");
ladu.lisaEse("Kast", 5, 15, "Puit");

console.log(ladu.kogumassAine("Paber")); 

ladu.muudaEse("Pall", 2, 30, "Kumm");
console.log(ladu.kogumassAine("Kumm")); 

ladu.kustutaEse("Raamat");
console.log(ladu.kogumassAine("Paber")); 