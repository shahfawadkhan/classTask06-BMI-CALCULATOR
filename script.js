document.getElementById('Submit').addEventListener('click', function(e) {
    e.preventDefault();

    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;


    if (height.trim() || weight.trim()) {
        console.log(height)
    }
    else{
        alert('fill all the fields')
    }
})