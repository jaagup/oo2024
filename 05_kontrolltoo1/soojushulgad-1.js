class aineOmadused{
  constructor (nimetus, erisoojus, erikaal){
    this.nimetus = nimetus;
    this.erisoojus = erisoojus;
    this.erikaal = erikaal;
  }

  getNimetus(){
    return this.nimetus;
  }

  getErisoojus(){
    return this.erisoojus;
  }

  getErikaal(){
    return this.erikaal;
  }
}

//Rakendus andmete sisestamiseks

let aine1 = new aineOmadused ("Vesi", 2000, 1000); //Näidisaine

//Andmete vaatamine

console.log("Aine nimetus: "+ aine1.getNimetus());
console.log("Aine erisoojus: "+ aine1.getErisoojus() + " J/(kg*K)");
console.log("Aine erikaal: "+ aine1.getErikaal() + " kg/kuupmeeter");
