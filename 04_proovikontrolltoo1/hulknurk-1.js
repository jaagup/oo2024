class Kolmnurk{
  constructor(x_koordinaadid, y_koordinaadid){
    this.x_koordinaadid = x_koordinaadid;
    this.y_koordinaadid = y_koordinaadid;
  }

  trükiAndmed(){
    console.log("X koordinaat on: ",  this.x_koordinaadid);
    console.log("Y koordinaadid on", this.y_koordinaadid);
  }
}


// Loome kaks eksemplari klassist Kolmnurk
const kolmnurk1 = new Kolmnurk([1, 2, 3], [4, 5, 6]);
const kolmnurk2 = new Kolmnurk([7, 8, 9], [10, 11, 12]);

// Trükime andmed välja
console.log("Kolmnurk 1 andmed:");
kolmnurk1.trükiAndmed();
console.log("Kolmnurk 2 andmed:");
kolmnurk2.trükiAndmed();