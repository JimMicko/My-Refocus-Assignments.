var PulseRate=131
function OxiMeter (Observetion){
    if((PulseRate>=40)&&(PulseRate<=100)){
        console.log("Normal reading.");
    }else if((PulseRate>=101)&&(PulseRate<=109)){
        console.log("Acceptable to continue home monitoring.");
    }else if((PulseRate>=110)&&(PulseRate<=130)){
        console.log("Seek advice from health professionals.");
    }else if(PulseRate>=131){
        console.log("Seek urgent medical advice.");
    }else{
        console.log("The Percentage of the Oxygen Sturation is not numerical")
    }
}
OxiMeter(PulseRate)