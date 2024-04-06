//Examples
//  A. Sarah has a driver's licence
//B. Sarah has good vision
//  And ...true if all are true

//OR
//if one of the variable is true

//not....acts only on one boolean value either true or false

//example
// A. Age is greater or equal 20....false
// B. Age is less than 30.....True

//let Use Operators!
//  !A.....TRue
// A and B  ...false

//!A and B....True
// A or B ....True
// A or !B.....false because both are false

//both are true . for AND
//const hasDriversLicense = true; //
//const hasGoodVision = true; // B
//console.log(hasDriversLicense && hasGoodVision);

//for or ||
//one is true and the other is false
const hasDriversLicense = true; // A
const hasGoodVision = false; // B
console.log(hasDriversLicense || hasGoodVision);

const shouldDrive = hasDriversLicense && hasGoodVision;
if (shouldDrive) {
  console.log(`Sarah is able to drive!`);
} else {
  console.log(`someone else should Drive!`);
}
const isTired = true;
console.log(hasDriversLicense && hasGoodVision);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log(`Sarah is able to drive!`);
} else {
  console.log(`someone else should Drive!`);
}
