document.getElementById('Submit').addEventListener('click', function(e) {
    e.preventDefault();

    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;


    if (height.trim() || weight.trim()) {
        // console.log(height)
        height = height /100;
        let bmi = (weight / (height * height)).toFixed(2);

        // console.log(bmi)
        let resultText;

    if (bmi < 18.5) {
        resultText = `Your BMI is ${bmi} (Underweight)`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        resultText = `Your BMI is ${bmi} (Normal weight)`;
    } else if (bmi >= 25 && bmi <= 29.9) {
        resultText = `Your BMI is ${bmi} (Overweight)`;
    } else {
        resultText = `Your BMI is ${bmi} (Obesity)`;
    }

    document.getElementById('result').textContent = resultText;
    }
    else{
        alert('fill all the fields')
    }
})