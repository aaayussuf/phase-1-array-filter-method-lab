// index.js

// Returns all drivers that match the passed name (case insensitive)
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// Returns drivers whose names begin with the provided letters
function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
}

// Checks if the name matches an object property
function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}

// Exporting the functions
module.exports = { findMatching, fuzzyMatch, matchName };
