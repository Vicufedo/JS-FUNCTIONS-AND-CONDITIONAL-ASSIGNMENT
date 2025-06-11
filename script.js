//1
function processAddress(){
    if(address.value== '') {
        alert ("input cannot be empty")
    } else{
        var letter = (address.value).toLowerCase()
        newAddress.innerHTML =letter
    }
}

//2
var bookTitles = ["the great developer", "the flower girl", "the lion king", "creamy and yummy ice cream", "the upper room"]
function detectTitles(){
    var userInput = titles.value.toLowerCase()
    if(bookTitles.includes(userInput)){
        myTitles.innerHTML = "Book already exist"
    }
    else{
        myTitles.innerHTML = "Welcome"
    }
}

//6
function checkTemperature(){
    var temperature = temperatureInn.value;
    if (temperature <= 19){
        deeTemperature.innerHTML = "Cold";
    }
    else if (temperature >=20 && temperature<=30) {
        deeTemperature.innerHTML = "Warm";
    }
    else{
        deeTemperature.innerHTML = "Hot";
    }
}

//8
function checkBmi(){
    var weight = parseFloat(weightTwo.value);    
    var height = parseFloat(heightTwo.value);    
    var bmi = weight / (height * height);

    if (bmi <= 18.5) {
        yourWeight.innerHTML = "You're underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        yourWeight.innerHTML = "Your weight is normal";
    } else if (bmi >= 25 && bmi < 30) {
        yourWeight.innerHTML = "You're overweight";
    } else {
        yourWeight.innerHTML = "You're obese";
    }
}

//10
function checkLuggage(){
    var weight = parseFloat(weightOne.value);
    var weight2 = parseFloat(weightThree.value);
    var luggage = weight + weight2;

    if (luggage < 20){
        yourLuggage.innerHTML = "Underweight";
    }
    else if (luggage >= 20 && luggage <= 30){
        yourLuggage.innerHTML = "Allowed";
    }
    else{
        yourLuggage.innerHTML = "Overweight";
    }
} 