//height to input is in meter
//weight to input is in kilogram

function calculateBMI(height,weight){
    let BMI=0
    BMI=weight/(height*height)
    if  (BMI<18.5)
        console.log("BMI: "+BMI+" You are Underweight");
        else if ((BMI>=18.5)&&(BMI<25))
        console.log("BMI: "+BMI+" You are Normal weight");
        else if ((BMI>=25)&&(BMI<30))
        console.log("BMI: "+BMI+" You are  Overweight");
        else if ((BMI>=30)&&(BMI<35))
        console.log("BMI: "+BMI+" You are  Obese");
        else if (BMI>=35)
        console.log("BMI: "+BMI+" You are  Extreme Obese");
        else
        console.log("The Value was Incorrect");
        return BMI
}
function inchesToMeter(heightInches){
    heightMeter=(heightInches*.0254)
    return heightMeter
}

//console.log(inchesToMeter(71)) // 1.8034
calculateBMI(1.8034,75)