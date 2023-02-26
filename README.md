# @sidev/zero

Just a temp placeholder for a comming-soon sidev project.

Formatted placeholder text in a code block with markdown syntax.

## Installation

```sh
npm install @sidev/zero
```

## Usage

This package exports two classes: `Zero` and `Npm`. Here's an example usage of these classes:

```javascript
const { Zero, Npm } = require('@sidev/zero');

const zero = new Zero('MyZero', 'testing');
zero.myPurpose(); // logs "MyZero's purpose is testing"
zero.logMe(); // logs "Logging MyZero..."

const npm = new Npm();
npm.printMe(); // logs "ID: 0, Name: npm, Purpose: npm"
```

### API

#### Zero

Represents a Zero object.

-   `name: string` - The name of the Zero object.
-   `purpose: string` - The purpose of the Zero object.

##### `new Zero(name, purpose)`

Creates a new Zero object.

-   `name: string` - The name of the Zero object.
-   `purpose: string` - The purpose of the Zero object.

##### `myPurpose()`

Prints the purpose of the Zero object.

#### Npm

Represents an Npm object that extends Zero.

-   `id: number` - The unique ID of the Npm object.
-   `name: string` - The name of the Npm object.
-   `purpose: string` - The purpose of the Npm object.

##### `new Npm([id], [prop])`

Creates a new Npm object.

-   `id: number (optional)` - The unique ID of the Npm object. Defaults to a unique 6-digit number.
-   `prop: string (optional)` - The name of the Npm object. Defaults to "npm".

##### `printMe()`

Prints information about the Npm object.

## License

ISC

## Author

[SI] Slavko Ivanovic
