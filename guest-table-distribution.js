// Guest Table Distribution Calculator

// Ask user for number of guests
var guests = prompt("How many guests?");

// Ask user for number of tables
var tables = prompt("How many tables?");

// Convert input strings to integers
guests = parseInt(guests);
tables = parseInt(tables);

// Check if inputs are valid numbers
if (isNaN(guests) || isNaN(tables) || guests <= 0 || tables <= 0) {
    alert("Please enter valid positive numbers!");
} else if (tables > guests) {
    alert("You have more tables than guests!");
} else {
    // Calculate guests per table using integer division
    var guestsPerTable = Math.floor(guests / tables);

    // Calculate remainder (tables that need one extra guest)
    var remainder = guests % tables;

    // Calculate how many tables have extra guest
    var tablesWithExtra = remainder;
    var tablesWithBase = tables - remainder;

    // Build the result message
    var message = "Your " + guests + " guests will be seated as follows: ";

    if (remainder === 0) {
        // All tables have the same number of guests
        message += tables + " tables of " + guestsPerTable + ".";
    } else {
        // Some tables have an extra guest
        var guestsWithExtra = guestsPerTable + 1;

        if (tablesWithExtra > 0 && tablesWithBase > 0) {
            message += tablesWithExtra + " table" + (tablesWithExtra > 1 ? "s" : "") + " of " + guestsWithExtra + ", ";
            message += "and " + tablesWithBase + " table" + (tablesWithBase > 1 ? "s" : "") + " of " + guestsPerTable + ".";
        } else if (tablesWithExtra > 0) {
            message += tablesWithExtra + " table" + (tablesWithExtra > 1 ? "s" : "") + " of " + guestsWithExtra + ".";
        }
    }

    // Display the result
    alert(message);
}
