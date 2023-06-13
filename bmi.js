function calculateBMI() {
    let weight = eval(document.getElementById('weight').value);
    let height = eval(document.getElementById('height').value);

    let result = weight / (height * height) * 703;
    return result;
}

function clearScreen() {
    document.getElementById('weight').value = "";
    document.getElementById('height').value = "";
}

function displayBMI() {
    alert("Your BMI is: " + calculateBMI());
    clearScreen()
}