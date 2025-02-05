class Employee {
    constructor(name, id, salary) {
        this.name = name;
        this.id = id;
        this.#salary = salary;
    }

    #salary; 

    getSalary() {
        return this.#salary;
    }

    calculateBonus() {
        return this.#salary * 0.05;
    }
}

class Manager extends Employee {
    calculateBonus() {
        return this.getSalary() * 0.2; 
    }
}

class Engineer extends Employee {
    calculateBonus() {
        return this.getSalary() * 0.15; 
    }
}

class Intern extends Employee {
    calculateBonus() {
        return this.getSalary() * 0.05;
    }
}

const manager = new Manager("Alice", 101, 80000);
const engineer = new Engineer("Bob", 102, 60000);
const intern = new Intern("Charlie", 103, 20000);

console.log(`${manager.name} Bonus: $${manager.calculateBonus()}`);
console.log(`${engineer.name} Bonus: $${engineer.calculateBonus()}`);
console.log(`${intern.name} Bonus: $${intern.calculateBonus()}`);
