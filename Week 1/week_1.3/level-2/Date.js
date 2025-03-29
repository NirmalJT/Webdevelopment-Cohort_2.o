// Create a new Date object (current date and time)
const now = new Date();
console.log("Current Date & Time:", now);

// Get individual date parts
console.log("Year:", now.getFullYear()); // Get the full year (e.g., 2025)
console.log("Month:", now.getMonth() + 1); // Get month (0-based, so add 1)
console.log("Date:", now.getDate()); // Get day of the month
console.log("Day:", now.getDay()); // Get day of the week (0 = Sunday, 6 = Saturday)
console.log("Hours:", now.getHours()); // Get current hour
console.log("Minutes:", now.getMinutes()); // Get current minutes
console.log("Seconds:", now.getSeconds()); // Get current seconds
//set a custom year
console.log(now.setFullYear(2022));
console.log(now.getFullYear());

// Set a specific date and time
const customDate = new Date(2025, 2, 15, 10, 30, 0); // (Year, Month-1, Day, Hour, Minute, Second)
console.log("Custom Date & Time:", customDate);

// Convert date to a readable string
console.log("Date as String:", now.toDateString()); // Example: "Sat Mar 29 2025"
console.log("Time as String:", now.toTimeString()); // Example: "12:45:30 GMT+0530 (India Standard Time)"
console.log("ISO Format:", now.toISOString()); // Example: "2025-03-29T07:15:30.000Z"

// Get timestamp (milliseconds since Jan 1, 1970)
console.log("Timestamp:", now.getTime());

// Create a date from a timestamp
const fromTimestamp = new Date(1711700000000); // Example timestamp
console.log("Date from Timestamp:", fromTimestamp);
