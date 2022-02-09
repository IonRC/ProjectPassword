const generateBtn = document.querySelector('.generate-btn');
const inputTarget = document.querySelector('.passwordText');
const copyBtn = document.querySelector('.clickToCopy');
const randomCheckedBox = document.querySelectorAll('.search');

const numbers = '1234567890';
const upperCase = 'QWERTYUIOPASDFGHJKLZXCVBNM';
const lowerCase = 'zxcvbnmlkjhgfdsapoiuytrewq';
const symbols = '!@#$%^&*_+><?';
const checkBoxes = [upperCase, lowerCase, numbers, symbols];

let passwordValue = '';
let concatCharacters = '';

const randomBox = (min, max) =>{
    return Math.floor(Math.random() * (max - min + 1) + min)
}
const randomNumber = randomBox(0, 3);

const checked = () => {
    randomCheckedBox[randomNumber].checked = true
}
checked();

function updateLength() {
    document.getElementById('range_count').innerText =
        document.getElementById("characterLength").value;
}
updateLength();

const createPassword = () =>{
    let randomIndexCheck = [];
    randomCheckedBox.forEach((elem, index) =>{
        if (elem.checked){
            randomIndexCheck.push(index);
        }
    });

    checkBoxes.forEach((elem, index) =>{
        console.log(checkBoxes)
        randomIndexCheck.forEach((elemCheck, indexCheck) =>{
            console.log(randomIndexCheck)
            if (elemCheck === index){
                concatCharacters += elem;
            }
        })
    });
    passwordValue = concatCharacters.split('').sort(function(){return 0.5-Math.random()}).join('');
    let sliceNum = document.getElementById("characterLength").value;
    inputTarget.textContent = passwordValue.slice(0, sliceNum);
    if (document.getElementById("characterLength").value.length > passwordValue.length){
        passwordValue += passwordValue
    }
    passwordValue = '';
    concatCharacters = '';
}
generateBtn.addEventListener('click', createPassword);

copyBtn.addEventListener('click' , ()=> {
    navigator.clipboard.writeText(inputTarget.innerText).then();
});