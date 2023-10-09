const form = document.querySelector("form");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please Enter valid height ${height}`;
    } else if (weight === '' || height < 0 || isNaN(weight)) {
        results.innerHTML = `Please Enter valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //  results.innerHTML = `<span>${bmi}</span>`;
        if (bmi < 18.6) {
            results.innerHTML = `<span>${bmi} is under weight</span>`;
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            results.innerHTML = `<span>${bmi} is in normal range</span>`;
        } else {
            results.innerHTML = `<span>${bmi} is  over weight</span>`;
        }
    }
    console.log();
}); 