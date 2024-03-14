function arvutaSuurimRaskus(pikkus, kaal, kogemus) {
    var suurimRaskus = 0;
    if (kogemus === 'algaja') {
        suurimRaskus = kaal * pikkus / 100;
    }
    else if (kogemus === 'kogenud') {
        suurimRaskus = kaal * pikkus / 100 * 1.2;
    }
    else if (kogemus === 'professionaal') {
        suurimRaskus = kaal * pikkus / 100 * 1.5;
    }
    return suurimRaskus;
}
var pikkus = 180; 
var kaal = 105; 
var kogemus = 'algaja'; // vali siit 'algaja', 'kogenud' või 'professionaal'
var suurimRaskus = arvutaSuurimRaskus(pikkus, kaal, kogemus);
console.log("Sinu maksimaalne t\u00F5stetav raskus on umbkaudu ".concat(suurimRaskus.toFixed(2), " kg."));
