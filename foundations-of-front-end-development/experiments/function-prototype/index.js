function Car() {
  this.numberOfDoors = 5;
  this.brand = "Toyota";

  // this.start = function() {}
  // this.stop = function() {}
}

Car.prototype.start = function() {}
Car.prototype.stop = function() {}


let luxuryCar = new Car();
let cheapCar = new Car();

Car.prototype.author = "David";
