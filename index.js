// Observer Class
class PhoneObserver {
    notify(phoneNumber) {
        console.log("Phone number dialed:", phoneNumber);
    }
}

class DialingObserver {
    notify(phoneNumber) {
        console.log("Now Dialing:", phoneNumber);
    }
}

// Telephone Class
class Telephone {
    constructor() {
        this.phoneNumbers = [];
        this.observers = [];
    }

    // Add Observer
    addObserver(observer) {
        this.observers.push(observer);
    }

    // Remove Observer
    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    // Notify Observers
    notifyObservers(phoneNumber) {
        this.observers.forEach(observer => observer.notify(phoneNumber));
    }

    // Add Phone Number
    addPhoneNumber(phoneNumber) {
        this.phoneNumbers.push(phoneNumber);
    }

    // Remove Phone Number
    removePhoneNumber(phoneNumber) {
        this.phoneNumbers = this.phoneNumbers.filter(num => num !== phoneNumber);
    }

    // Dial Phone Number
    dialPhoneNumber(phoneNumber) {
        if (this.phoneNumbers.includes(phoneNumber)) {
            this.notifyObservers(phoneNumber);
        } else {
            console.log("Phone number not found.");
        }
    }
}

// Usage
const telephone = new Telephone();
const phoneObserver = new PhoneObserver();
const dialingObserver = new DialingObserver();

telephone.addObserver(phoneObserver);
telephone.addObserver(dialingObserver);

telephone.addPhoneNumber("1234567890");
telephone.addPhoneNumber("2347023232");

telephone.dialPhoneNumber("1234567890");
telephone.dialPhoneNumber("2347023232");
telephone.dialPhoneNumber("9876543210"); // This number doesn't exit
