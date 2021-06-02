const input = require('readline-sync');

let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius = -225;
let fuelLevel = "100%";
let weatherStatus = "clear";


let overline = "-------------------------------------";
console.log (overline);
console.log ("> LC04 - LAUNCH CHECKLIST");
console.log (overline); 
console.log (" Date: "  + date );
console.log (" Time: "  + time );


console.log (overline);
console.log ("> ASTRONAUT INFO");
console.log (overline);
console.log ("* count: " + astronautCount);
console.log ("* stauts: " + astronautStatus);
console.log (overline);

console.log ("> FUEL DATA");
console.log (overline);
console.log (" Fuel temp celsius: " +   fuelTempCelsius);
console.log (" Fuel level: " + fuelLevel);
console.log (overline);

console.log ("MASS DATA");
console.log (overline);
console.log ("* Crew mass: "  + crewMassKg + " Kg");
console.log ("* Fuel mass: " + fuelMassKg + " Kg");
console.log ("* Shuttle mass: " + shuttleMassKg + " Kg");
console.log ("* Total mass: " + totalMassKg + " Kg");

console.log (overline);
console.log ("> FLIGHT PLAN");
console.log (overline);
console.log ("* weather: " + weatherStatus );

console.log (overline);
console.log ("> OVERALL STATUS");
console.log ("* Clear for takeoff:  YES")


