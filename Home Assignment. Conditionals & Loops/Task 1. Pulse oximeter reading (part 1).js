var OxygenSturation=95
function OxiMeter (Observetion){
    if(OxygenSturation>95){
        console.log("Normal reading.");
    }else if(OxygenSturation==95){
        console.log("Acceptable to continue home monitoring.");
    }else if((OxygenSturation>=92)&&(OxygenSturation<95)){
        console.log("Seek advice from health professionals.");
    }else if(OxygenSturation<92){
        console.log("Seek urgent medical advice.");
    }else{
        console.log("The Percentage of the Oxygen Sturation is not numerical")
    }
}
OxiMeter(OxygenSturation)