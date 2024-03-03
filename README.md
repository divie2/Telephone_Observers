# Telephone Package

This is a simple telephone package written in JavaScript. It provides functionality to manage phone numbers and notify observers when a phone number is dialed.

## Features

- Add a new phone number
- Remove an existing phone number
- Dial a phone number (observers are notified)

## Usage

1. **AddPhoneNumber(phoneNumber):** Adds a new phone number to the list of available numbers.

    ```javascript
    telephone.addPhoneNumber("1234567890");
    ```

2. **RemovePhoneNumber(phoneNumber):** Removes an existing phone number from the list.

    ```javascript
    telephone.removePhoneNumber("1234567890");
    ```

3. **DialPhoneNumber(phoneNumber):** Dials a phone number. Observers are notified when a number is dialed.

    ```javascript
    telephone.dialPhoneNumber("1234567890");
    ```

## Observer Classes

- **PhoneObserver:** Prints the phone number that is dialed.
- **DialingObserver:** Prints "Now Dialing" before printing the phone number.

## Installation

To use the telephone package in your project, you can install it via npm:

```
npm install telephone-package
```

## Example

```javascript
const telephone = new Telephone();
const phoneObserver = new PhoneObserver();
const dialingObserver = new DialingObserver();

telephone.addObserver(phoneObserver);
telephone.addObserver(dialingObserver);

telephone.addPhoneNumber("1234567890");
telephone.addPhoneNumber("2347023232");

telephone.dialPhoneNumber("1234567890");
telephone.dialPhoneNumber("2347023232");
```


