let CaloriesPerhHour=450;
let numTimesSamRuns=15;
let runHoursPerDay=.5;
let totalHoursRunning=numTimesSamRuns*runHoursPerDay;
let totalCaloriesBurned=totalHoursRunning*CaloriesPerhHour
console.log(`Great work, Sam! After ${runHoursPerDay} hour/s of running everyday in a week, you lose a total of ${totalCaloriesBurned} calories.`);