/**
 * Represents a Zero object.
 * @class
 * @classdesc A Zero object with a name and purpose.
 */
class Zero {
    /**
     * Creates a new Zero object.
     * @param {string} name - The name of the Zero object.
     * @param {string} purpose - The purpose of the Zero object.
     */
    constructor(name, purpose) {
        this.name = name;
        this.purpose = purpose;
    }

    /**
     * Prints the purpose of the Zero object.
     * @method
     */
    myPurpose() {
        console.log(`${this.name}'s purpose is ${this.purpose}`);
    }

    /**
     * Logs a message about the Zero object.
     * @method
     */
    logMe() {
        console.log(`Logging ${this.name}...`);
    }
}

let counter = 0;

/**
 * Represents an Npm object that extends Zero.
 * @class
 * @classdesc An Npm object with a unique ID, a name, and a purpose.
 * @extends Zero
 */
class Npm extends Zero {
    /**
     * Creates a new Npm object.
     * @param {number} [id=counter++] - The unique ID of the Npm object.
     * @param {string} [prop="npm"] - The name of the Npm object.
     */
    constructor(id = counter++, prop = 'npm') {
        super(prop, 'npm');
        this.id = id;
    }

    /**
     * Prints information about the Npm object.
     * @method
     */
    printMe() {
        console.log(
            `ID: ${this.id}, Name: ${this.name}, Purpose: ${this.purpose}`
        );
    }
}

module.exports = {
    Zero,
    Npm,
};
