class Vehicle {
    constructor(brand, model, rentPricePerDay) {
        this.brand = brand;
        this.model = model;
        this.rentPricePerDay = rentPricePerDay;
    }

    calculateRentalCost(days) {
        return this.rentPricePerDay * days;
    }
}

class Car extends Vehicle {
    calculateRentalCost(days) {
        return super.calculateRentalCost(days) * 1.1; 
    }
}

class Bike extends Vehicle {
    calculateRentalCost(days) {
        return super.calculateRentalCost(days) * 0.9; 
    }
}

class Truck extends Vehicle {
    calculateRentalCost(days) {
        return super.calculateRentalCost(days) * 1.2; 
    }
}

// Example Usage
const car = new Car("Toyota", "Camry", 50);
const bike = new Bike("Yamaha", "MT-07", 30);
const truck = new Truck("Ford", "F-150", 80);

console.log(`${car.brand} ${car.model} Rental Cost for 5 days: $${car.calculateRentalCost(5)}`);
console.log(`${bike.brand} ${bike.model} Rental Cost for 5 days: $${bike.calculateRentalCost(5)}`);
console.log(`${truck.brand} ${truck.model} Rental Cost for 5 days: $${truck.calculateRentalCost(5)}`);
