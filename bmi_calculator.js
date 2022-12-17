function calculateBMI(height,weight){
    let BMI=0
    BMI=weight/(height*height)
    console.log(BMI)
}
function BMIInterpret(calculateBMI){
    if  (calculateBMI<18.5)
        console.log("Underweight");
        else if ((calculateBMI>=18.5)&&(BMI<25))
        console.log("Normal weight");
        else if ((calculateBMI>=25)&&(BMI<30))
        console.log("Overweight");
        else if ((calculateBMI>=30)&&(BMI<35))
        console.log("Obese");
        else if (calculateBMI>=35)
        console.log("You are  Extreme Obese");
        else
        console.log("The Value was Incorrect");
};

calculateBMI(1.8034,75)
BMIInterpret(1.8034,75)
