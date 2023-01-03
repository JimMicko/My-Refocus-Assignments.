const calculateBMI=require("./bmi_calculator.js");

test('Testing BMI for 52kg, 1.72m, Should be Underweight',()=>{
    expect(calculateBMI(52,1.72)).toBe('Underweight');
});

test('Testing BMI for 52kg, 1.72m, Should NOT be Normal Weight',()=>{
    expect(calculateBMI(52,1.72)).not.toBe('Normal Weight');
});

test('Testing BMI for 52kg, 1.72m, Should NOT be Overweight',()=>{
    expect(calculateBMI(52,1.72)).not.toBe('Overweight');
});

test('Testing BMI for 52kg, 1.72m, Should NOT be Obese I',()=>{
    expect(calculateBMI(52,1.72)).not.toBe('Obese I');
});

test('Testing BMI for 52kg, 1.72m, Should NOT be Obese II',()=>{
    expect(calculateBMI(52,1.72)).not.toBe('Obese II');
});

test('Testing BMI for 52kg, 1.72m, Should NOT be Obese III',()=>{
    expect(calculateBMI(52,1.72)).not.toBe('Obese III');
});

test('Testing BMI for 62kg, 1.72m, Should NOT be Underweight',()=>{
    expect(calculateBMI(62,1.72)).not.toBe('Underweight');
});

test('Testing BMI for 62kg, 1.72m, Should be Normal Weight',()=>{
    expect(calculateBMI(62,1.72)).toBe('Normal Weight');
});

test('Testing BMI for 62kg, 1.72m, Should NOT be Overweight',()=>{
    expect(calculateBMI(62,1.72)).not.toBe('Overweight');
});

test('Testing BMI for 62kg, 1.72m, Should NOT be Obese I',()=>{
    expect(calculateBMI(62,1.72)).not.toBe('Obese I');
});

test('Testing BMI for 62kg, 1.72m, Should NOT be Obese II',()=>{
    expect(calculateBMI(62,1.72)).not.toBe('Obese II');
});

test('Testing BMI for 62kg, 1.72m, Should NOT be Obese III',()=>{
    expect(calculateBMI(62,1.72)).not.toBe('Obese III');
});

test('Testing BMI for 82kg, 1.72m, Should NOT be Underweight',()=>{
    expect(calculateBMI(82,1.72)).not.toBe('Underweight');
});

test('Testing BMI for 82kg, 1.72m, Should NOT be Normal Weight',()=>{
    expect(calculateBMI(82,1.72)).not.toBe('Normal Weight');
});

test('Testing BMI for 82kg, 1.72m, Should be Overweight',()=>{
    expect(calculateBMI(82,1.72)).toBe('Overweight');
});

test('Testing BMI for 82kg, 1.72m, Should NOT be Obese I',()=>{
    expect(calculateBMI(82,1.72)).not.toBe('Obese I');
});

test('Testing BMI for 82kg, 1.72m, Should NOT be Obese II',()=>{
    expect(calculateBMI(82,1.72)).not.toBe('Obese II');
});

test('Testing BMI for 82kg, 1.72m, Should NOT be Obese III',()=>{
    expect(calculateBMI(82,1.72)).not.toBe('Obese III');
});

test('Testing BMI for 92kg, 1.72m, Should NOT be Underweight',()=>{
    expect(calculateBMI(92,1.72)).not.toBe('Underweight');
});

test('Testing BMI for 92kg, 1.72m, Should NOT be Normal Weight',()=>{
    expect(calculateBMI(92,1.72)).not.toBe('Normal Weight');
});

test('Testing BMI for 92kg, 1.72m, Should NOT be Overweight',()=>{
    expect(calculateBMI(92,1.72)).not.toBe('Overweight');
});

test('Testing BMI for 92kg, 1.72m, Should be Obese I',()=>{
    expect(calculateBMI(92,1.72)).toBe('Obese I');
});

test('Testing BMI for 92kg, 1.72m, Should NOT be Obese II',()=>{
    expect(calculateBMI(92,1.72)).not.toBe('Obese II');
});

test('Testing BMI for 122kg, 1.72m, Should NOT be Obese III',()=>{
    expect(calculateBMI(122,1.72)).not.toBe('Obese III');
});

test('Testing BMI for 122kg, 1.72m, Should NOT be Underweight',()=>{
    expect(calculateBMI(122,1.72)).not.toBe('Underweight');
});

test('Testing BMI for 122kg, 1.72m, Should NOT be Normal Weight',()=>{
    expect(calculateBMI(122,1.72)).not.toBe('Normal Weight');
});

test('Testing BMI for 122kg, 1.72m, Should NOT be Overweight',()=>{
    expect(calculateBMI(122,1.72)).not.toBe('Overweight');
});

test('Testing BMI for 122kg, 1.72m, Should NOT be Obese I',()=>{
    expect(calculateBMI(122,1.72)).not.toBe('Obese I');
});

test('Testing BMI for 122kg, 1.72m, Should be Obese II',()=>{
    expect(calculateBMI(122,1.72)).toBe('Obese II');
});

test('Testing BMI for 122kg, 1.72m, Should NOT be Obese III',()=>{
    expect(calculateBMI(122,1.72)).not.toBe('Obese III');
});

test('Testing BMI for 152kg, 1.72m, Should NOT be Underweight',()=>{
    expect(calculateBMI(152,1.72)).not.toBe('Underweight');
});

test('Testing BMI for 152kg, 1.72m, Should NOT be Normal Weight',()=>{
    expect(calculateBMI(152,1.72)).not.toBe('Normal Weight');
});

test('Testing BMI for 152kg, 1.72m, Should NOT be Overweight',()=>{
    expect(calculateBMI(152,1.72)).not.toBe('Overweight');
});

test('Testing BMI for 152kg, 1.72m, Should NOT be Obese I',()=>{
    expect(calculateBMI(152,1.72)).not.toBe('Obese I');
});

test('Testing BMI for 152kg, 1.72m, Should NOT be Obese II',()=>{
    expect(calculateBMI(152,1.72)).not.toBe('Obese II');
});

test('Testing BMI for 152kg, 1.72m, Should be Obese III',()=>{
    expect(calculateBMI(152,1.72)).toBe('Obese III');
});