//this includes the vehicle class as a module
const {Vehicle} = require("./vehicleBaseClass")

class Car extends Vehicle{   //found a duplicate on google that explained it to me/ had to remove vehicle module to get it to work
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);  //super, need more detail
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 5;
        this.scheduleService = false;
    } 
    serviceNeeded() {
        if (this.mileage > 30000) {
            this.scheduleService = true;
            return this.scheduleService
        }
    }

    startUp() {
        if (this.fuel > 0) {
            console.log('vehicle started');
            return this.startUp = true
        } else {
            console.log('no gas');
            return this.startUp = false
        }
    }
    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;
            } else {
                console.log(this.model + "mercury sedan" + this.make + "no room");
            }
         } else {
                console.log(this.model + "mercury sedan" + this.make + "cant sit here");
            
            
        }

    }
}
//this shows how to call from this module...
let myCar = new Car("Mercury", "Sedan", "1965", "color", "mileage");

myCar.startUp()
myCar.loadPassenger(5)
myCar.stop()
myCar.serviceNeeded()

console.log(myCar)

