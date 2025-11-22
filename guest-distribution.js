// Guest Table Distribution Program

// Ask the user for input
var guests = prompt("How many guests?");
var tables = prompt("How many tables?");

// Convert to numbers
guests = parseInt(guests);
tables = parseInt(tables);

// Calculate guests per table (integer division)
var guestsPerTable = Math.floor(guests / tables);

// Calculate remainder (extra guests)
var remainder = guests % tables;

// Figure out the distribution
var tablesWithExtra = remainder;
var tablesNormal = tables - remainder;
var guestsWithExtra = guestsPerTable + 1;

// Build the message
var message = "Your " + guests + " guests will be seated as follows: ";

if (remainder === 0) {
    // All tables have the same number
    message = message + tables + " tables of " + guestsPerTable + ".";
} else {
    // Some tables have extra
    message = message + tablesWithExtra + " tables of " + guestsWithExtra + ", ";
    message = message + "and " + tablesNormal + " tables of " + guestsPerTable + ".";
}

// Display the result
alert(message);
