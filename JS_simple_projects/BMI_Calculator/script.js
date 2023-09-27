//get the height & weight units
let heightUnit = document.getElementById("height-unit").value;
let weightUnit = document.getElementById("weight-unit").value;

//get height & weight elemets
let heightInput = document.querySelector("#height");
let weightInput = document.querySelector("#weight");

//get the info div box, to show the updated result further
let bmiInfo = document.querySelector("#info");

//create a function to calculate the BMI
function bmiCalculator(height, weight){
    //for invalid number Not a Number NaN
    if (isNaN(height) || isNaN(weight) || height < 0 || weight < 0){
        return "Invalid Entry";
    }


    let bmi = weight / Math.pow(height, 2);
    return bmi.toFixed(2);
}

//create a function that takes the updated height & weight values and
//invoke the BMI calculator function
function updatedBMIInfo(){
    //get the updated height & weight values
    let heightValue = heightInput.value;
    let weightValue = weightInput.value;

    //invoke the above bmiCalculator() function
    let bmiResult = bmiCalculator(heightValue, weightValue);

    //update the above values to show on page
    bmiInfo.innerHTML = `
        <h3>BMI Result</h3>
        <p>Height (${heightUnit}): ${heightValue}</p>
        <p>Weight (${weightUnit}): ${weightValue}</p>
        <p>BMI: ${bmiResult}</p>
    `
}

//add event Listener to Get BMI Button
let bmiButton = document.querySelector("#bmi-btn");
bmiButton.addEventListener('click', ()=>{
    //invoke the updated BMI info function
    updatedBMIInfo();
})