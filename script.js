document.getElementById('Submit').addEventListener('click', function(e) {
    e.preventDefault();

    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;


    if (height.trim() || weight.trim()) {
        // console.log(height)
        height = height /100;
        let bmi = weight / (height * height);

        console.log(bmi)
    }
    else{
        alert('fill all the fields')
    }
})