const { intervalToDuration } = require('date-fns');

// Get the current date and time
const now = new Date();

// Get the date of the start of the next year
const nextYear = new Date(now.getFullYear() + 1, 0, 1);

// Calculate the difference using date-fns
const difference = intervalToDuration({ start: now, end: nextYear });

// Extract the values
const months = difference.months;
const days = difference.days;
const hours = difference.hours;
const minutes = difference.minutes;
const seconds = difference.seconds;

// Display the results
console.log(`There are ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds remaining until the next year.`);
