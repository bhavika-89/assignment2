class Payment {
    constructor(amount, date) {
        this.amount = amount;
        this.date = date;
    }

    processPayment() {
        throw new Error("Method must be implemented in subclass");
    }
}

class CreditCardPayment extends Payment {
    #cardNumber;
    
    constructor(amount, date, cardNumber) {
        super(amount, date);
        this.#cardNumber = cardNumber;
    }

    processPayment() {
        return `Processing credit card payment of $${this.amount} on ${this.date}`;
    }
}

class PayPalPayment extends Payment {
    constructor(amount, date, email) {
        super(amount, date);
        this.email = email;
    }

    processPayment() {
        return `Processing PayPal payment of $${this.amount} from ${this.email} on ${this.date}`;
    }
}

class CryptoPayment extends Payment {
    constructor(amount, date, walletAddress) {
        super(amount, date);
        this.walletAddress = walletAddress;
    }

    processPayment() {
        return `Processing cryptocurrency payment of $${this.amount} to wallet ${this.walletAddress} on ${this.date}`;
    }
}

const creditCardPayment = new CreditCardPayment(100, "2025-02-05", "1234-5678-9876-5432");
const paypalPayment = new PayPalPayment(50, "2025-02-05", "Bob");
const cryptoPayment = new CryptoPayment(200, "2025-02-05", "0xABC123XYZ456");

console.log(creditCardPayment.processPayment());
console.log(paypalPayment.processPayment());
console.log(cryptoPayment.processPayment());