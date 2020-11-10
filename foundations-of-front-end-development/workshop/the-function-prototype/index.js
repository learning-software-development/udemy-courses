function Car(brand, year) {
  this.brand = brand;
  this.year = year;
  this.engine = 'stopped';
}

Car.prototype.start = function() {
  this.engine = 'started';
}

Car.prototype.stop = function() {
  this.engine = 'stopped';
}

var oldChevy = new Car('Chevy', 1950);
var newFarrari = new Car('Farrara', 2014);

console.dir(oldChevy);
console.dir(newFarrari);

newFarrari.start();

console.dir(oldChevy);
console.dir(newFarrari);
