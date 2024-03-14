function aritmeetilineKeskmine(a, b, c) {
  var keskmine = (a + b + c) / 3;
  return keskmine.toFixed(2);
}

// Testimine
var keskmineArv = aritmeetilineKeskmine(5, 6, 7); 
console.log("Kolme arvu aritmeetiline keskmine on:", keskmineArv);

