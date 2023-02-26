// const { Zero, Npm } = require('@sidev/zero');

const { Zero, Npm } = require('./index'); // unpublished
const isOdd = require('is-odd'); // just test dependencies

const random = () => Math.floor(Math.random() * 900000) + 100000;

const zero = new Zero('MyZero', 'testing');
zero.myPurpose(); // logs "MyZero's purpose is testing"
zero.logMe(); // logs "Logging MyZero..."

const npm = new Npm();
npm.logMe();
npm.printMe(); // logs "ID: 0, Name: npm, Purpose: npm"

const npm2 = new Npm(random(), 'other');
npm2.logMe();
npm2.printMe(); // logs "ID: 0, Name: npm, Purpose: npm"

console.log(isOdd(random()));
console.log(npm instanceof Zero);
