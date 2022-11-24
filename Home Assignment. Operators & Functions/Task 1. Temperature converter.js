function convertToKelvinfromCelsius(TempCelsius){
    let TempKelvin=(TempCelsius+273.15);
    return TempKelvin;
}
function convertToKelvinfromFahrenheit(TempFahrenheit){
    let TempKelvin=(TempFahrenheit-32)*5/9+273.15;
    return TempKelvin;
}

console.log(convertToKelvinfromCelsius(100))
console.log(convertToKelvinfromFahrenheit(100))