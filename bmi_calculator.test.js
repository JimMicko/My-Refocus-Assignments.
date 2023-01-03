const calculateBMI=require("./bmi_calculator.js");

console.log('***');
console.log('Testing BMI for 52kg, 1.72m, Should be Underweight');
console.log('Underweight',calculateBMI(52,1.72)==='Underweight'); //true
console.log('Normal Weight',calculateBMI(52,1.72)==='Normal Weight'); //false
console.log('Overweight',calculateBMI(52,1.72)==='Overweight'); //false
console.log('Obese I',calculateBMI(52,1.72)==='Obese I'); //false
console.log('Obese II',calculateBMI(52,1.72)==='Obese II'); //false
console.log('Obese III',calculateBMI(52,1.72)==='Obese III'); //false

console.log('***');
console.log('Testing BMI for 62kg, 1.72m, Should be Normal Weight');
console.log('Underweight',calculateBMI(62,1.72)==='Underweight'); //false
console.log('Normal Weight',calculateBMI(62,1.72)==='Normal Weight'); //true
console.log('Overweight',calculateBMI(62,1.72)==='Overweight'); //false
console.log('Obese I',calculateBMI(62,1.72)==='Obese I'); //false
console.log('Obese II',calculateBMI(62,1.72)==='Obese II'); //false
console.log('Obese III',calculateBMI(62,1.72)==='Obese III'); //false

console.log('***');
console.log('Testing BMI for 82kg, 1.72m, Should be Overweight');
console.log('Underweight',calculateBMI(82,1.72)==='Underweight'); //false
console.log('Normal Weight',calculateBMI(82,1.72)==='Normal Weight'); //false
console.log('Overweight',calculateBMI(82,1.72)==='Overweight'); //true
console.log('Obese I',calculateBMI(82,1.72)==='Obese I'); //false
console.log('Obese II',calculateBMI(82,1.72)==='Obese II'); //false
console.log('Obese III',calculateBMI(82,1.72)==='Obese III'); //false

console.log('***');
console.log('Testing BMI for 92kg, 1.72m, Should be Obese I');
console.log('Underweight',calculateBMI(92,1.72)==='Underweight'); //false
console.log('Normal Weight',calculateBMI(92,1.72)==='Normal Weight'); //false
console.log('Overweight',calculateBMI(92,1.72)==='Overweight'); //false
console.log('Obese I',calculateBMI(92,1.72)==='Obese I'); //true
console.log('Obese II',calculateBMI(92,1.72)==='Obese II'); //false
console.log('Obese III',calculateBMI(92,1.72)==='Obese III'); //false

console.log('***');
console.log('Testing BMI for 122kg, 1.72m, Should be Obese II');
console.log('Underweight',calculateBMI(122,1.72)==='Underweight'); //false
console.log('Normal Weight',calculateBMI(122,1.72)==='Normal Weight'); //false
console.log('Overweight',calculateBMI(122,1.72)==='Overweight'); //false
console.log('Obese I',calculateBMI(122,1.72)==='Obese I'); //false
console.log('Obese II',calculateBMI(122,1.72)==='Obese II'); //true
console.log('Obese III',calculateBMI(122,1.72)==='Obese III'); //false

console.log('***');
console.log('Testing BMI for 152kg, 1.72m, Should be Obese III');
console.log('Underweight',calculateBMI(152,1.72)==='Underweight'); //false
console.log('Normal Weight',calculateBMI(152,1.72)==='Normal Weight'); //false
console.log('Overweight',calculateBMI(152,1.72)==='Overweight'); //false
console.log('Obese I',calculateBMI(152,1.72)==='Obese I'); //false
console.log('Obese II',calculateBMI(152,1.72)==='Obese II'); //false
console.log('Obese III',calculateBMI(152,1.72)==='Obese III'); //true