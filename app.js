const { differenceInSeconds, differenceInMinutes, differenceInHours, differenceInDays, differenceInMonths, differenceInYears } = require('date-fns');


const now = new Date();


const nextYear = new Date(now.getFullYear() + 1, 0, 1);


const totalMonths = differenceInMonths(nextYear, now);
const totalDays = differenceInDays(nextYear, now);
const totalHours = differenceInHours(nextYear, now);
const totalMinutes = differenceInMinutes(nextYear, now);
const totalSeconds = differenceInSeconds(nextYear, now);


const remainingDays = totalDays - Math.floor(totalMonths * 30.42); 
const remainingHours = totalHours - (totalDays * 24);
const remainingMinutes = totalMinutes - (totalHours * 60);
const remainingSeconds = totalSeconds - (totalMinutes * 60);


console.log(`There are ${totalMonths} months, ${remainingDays} days, ${remainingHours} hours, ${remainingMinutes} minutes, and ${remainingSeconds} seconds remaining until the next year.`);
