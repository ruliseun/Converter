
let num = 0;

let myValue = document.getElementById('userValue')
myValue.textContent = num;

let myLength = document.getElementById('length')

let meterToFeet = num * 3.28084;
meterToFeet = meterToFeet.toFixed(3);

feetToMeter = num * 0.3048;
feetToMeter = feetToMeter.toFixed(3);


myLength.textContent = `${num} meters = ${meterToFeet} feet | ${num} feet = ${feetToMeter} meters `


let myVolume = document.getElementById('volume')
let litersToGallons = num * 0.264172;
litersToGallons = litersToGallons.toFixed(3);

let gallonsToLiters = num * 3.78541;
gallonsToLiters = gallonsToLiters.toFixed(3);

myVolume.textContent = `${num} liters = ${litersToGallons} gallons | ${num} gallons = ${gallonsToLiters} liters `


let myMass = document.getElementById('mass')


let massToPounds = num * (1000/453.59237);
massToPounds = massToPounds.toFixed(3);

let PoundsToMass = num * 453.592;
PoundsToMass = PoundsToMass.toFixed(3);

myMass.textContent = `${num} kilos = ${massToPounds} pounds | ${num} pounds = ${PoundsToMass} kilos `
