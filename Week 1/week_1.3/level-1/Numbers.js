// Convert string to integer
console.log(parseInt("12")); // 12
console.log(parseInt("4.555")); // 4 (only integer part)
console.log(parseInt("36df")); // 36 (stops at 'd')
console.log(parseInt("52ff")); // 52 (stops at 'f')

// Convert string to float
console.log(parseFloat("72")); // 72
console.log(parseFloat("2")); // 2
console.log(parseFloat("55v")); // 55 (stops at 'v')
console.log(parseFloat("44hh")); // 44 (stops at 'h')
