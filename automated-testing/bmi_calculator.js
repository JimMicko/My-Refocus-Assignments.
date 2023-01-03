function calculateBMI(weight,height){
    let BMI=0
    BMI=weight/(height*height)
    if(BMI<18.5){
        return"Underweight"
    }
    else if((BMI>=18.5)&&(BMI<25)){
        return"Normal Weight"
    }
    else if((BMI>=25)&&(BMI<30)){
        return"Overweight"
    }
    else if((BMI>=30)&&(BMI<40)){
        return "Obese I"
    }
    else if((BMI>=40)&&(BMI<50)){
        return"Obese II"
    }
    else if(BMI>=50){
        return"Obese III"
    }
};

module.exports  = calculateBMI   