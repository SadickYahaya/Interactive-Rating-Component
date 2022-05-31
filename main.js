const numbers = ['1', '2', '3', '4', '5'].map(id => document.getElementById(id));
let submitButton = document.getElementById('submit');

let selectedNumber = []

document.getElementById('thankYouPage').style.display = "none";

numbers[0].addEventListener('click', () => {
    selectedNumber.push(numbers[0].innerHTML);
});

numbers[1].addEventListener('click', () => {
    selectedNumber.push(numbers[1].innerHTML);
});

numbers[2].addEventListener('click', () => {
    selectedNumber.push(numbers[2].innerHTML);
});

numbers[3].addEventListener('click', () => {
    selectedNumber.push(numbers[3].innerHTML);
});

numbers[4].addEventListener('click', () => {
    selectedNumber.push(numbers[4].innerHTML);
});

submitButton.addEventListener('click', () => {
    document.getElementById('thankYouPage').style.display = "flex";
    document.getElementById('ratingPage').style.display = "none";
    if (numbers[0]){
        document.getElementById('selection').innerHTML = selectedNumber[0];
    } 
    else if(numbers[1]){
        document.getElementById('selection').innerHTML = selectedNumber[1];
    } 

    else if(numbers[2]){
        document.getElementById('selection').innerHTML = selectedNumber[2];
    } 
    else if(numbers[3]){
        document.getElementById('selection').innerHTML = selectedNumber[3];
    } 
    else if(numbers[4]){
        document.getElementById('selection').innerHTML = selectedNumber[4];
    } 
});








