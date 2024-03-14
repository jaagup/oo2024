class Ese{
  constructor(nimi, mass, temp, aine){
    this.nimi = nimi;
    this.mass = mass;
    this.temp = temp;
    this.aine = aine;
  }
}

class Ladu {
  constructor(){
    this.esemed =[];  
  }

  lisaEse(nimi, mass, temp, aine){
    this.esemed.push(new Ese(nimi, mass, temp, aine));
  }

  muudaEset(nimi, uusMass, uusTemp, uusAine){
    const Esem = this.esemed.find(e => e.nimi === nimi);
    if (Esem){
      Esem.mass = uusMass;
      Esem.temp = uusTemp;
      Esem.aine = uusAine;
    } else{
      console.log("Esemeid nimega: " + nimi + "ei leitud.")
    }
  }

  kogumiTemp(){
    let kokkuMass = 0;
    let summaMassTemp = 0;
    this.esemed.forEach(e =>{
      kokkuMass += e.mass;
      summaMassTemp += e.mass * e.temp; 
    });
    return summaMassTemp/kokkuMass;
  }
}

//Test
const kogum = new Ladu();

kogum.lisaEse("Pall", 1, 25, "Kumm");
kogum.lisaEse("Raamat", 2, 20, "Paber");
kogum.lisaEse("Kast", 5, 15, "Puit");

console.log(kogum.kogumiTemp() + " kraadi.");
