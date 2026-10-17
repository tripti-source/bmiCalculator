const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let height = document.querySelector('#height').value / 100

    const weight = Number(document.querySelector('#weight').value)

    let bmi = weight / (height * height);
    document.getElementById("result").value = bmi.toFixed(2);

    let comment = document.querySelector('.comment')
    let category ='';
     if (bmi < 18.5) {
        category="You are Underweight!:(";
    } else if (bmi >= 18.5 && bmi < 25) {
        category="You are Healthy!:)";
    } else if (bmi >= 25 && bmi < 30) {
        category="You are Overweight!:(";
    } else {
        category= "You are Obese!:(";
    }
    
    comment.innerHTML=category;
});















// const val =document.querySelector('#value').value
//     val= bmi;
//    console.log(val);
   


