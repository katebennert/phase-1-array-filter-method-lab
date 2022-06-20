// Code your solution here

function findMatching(driverNames, name) {
    return driverNames.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(driverNames, chars) {
    return driverNames.filter(driver => chars === driver.slice(0,chars.length));
}

function matchName(driverObjs, name) {
    return driverObjs.filter(driver => name === driver.name);
}

/*
We have an array of drivers with various information. We need to write functions
using the `filter()` method so that PickMeUp Taxi service employees can easily
query the data. Run the tests to see what conditions need to be met by each
function _before_ you start writing JavaScript code.

You'll be writing three functions:

* `findMatching`- This function takes an array of drivers' names and a `string`
  as arguments, and returns the matching list of drivers. The function should be
  case insensitive.

* `fuzzyMatch` - This function takes an array of drivers' names and a `string`
  as arguments for querying the array, and returns all drivers whose names begin
  with the provided letters.

* `matchName` - This function takes an array of `driver` objects and a `string`
  as arguments. Each `driver` object has two properties: `name` and `hometown`.
  The function should return each element whose `name` property matches the
  provided `string` argument.
  */
