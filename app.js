const generateBtn = document.querySelector('.generate-btn');
const inputTarget = document.querySelector('.passwordText');
const characterRange = document.getElementById('characterLength');
const firstCheckBox = document.getElementById('includeUpper');
const secondCheckBox = document.getElementById('includeLower');
const thirdCheckBox = document.getElementById('includeNumbers');
const forthCheckBox = document.getElementById('includeSymbols');
const copyBtn = document.querySelector('.clickToCopy');
const randomCheckedBox = document.querySelectorAll('.search');

const numbers = '1234567890';
const upperCase = 'QWERTYUIOPASDFGHJKLZXCVBNM';
const lowerCase = 'zxcvbnmlkjhgfdsapoiuytrewq';
const symbols = '!@#$%^&*_+><?';
let passwordLength = '';
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
    passwordLength = characterRange.value;
    concatCharacters += firstCheckBox.checked ? upperCase : '';
    concatCharacters += secondCheckBox.checked ? lowerCase : '';
    concatCharacters += thirdCheckBox.checked ? numbers : '';
    concatCharacters += forthCheckBox.checked ? symbols : '';
    passwordValue = '';
    for (let i = 0; i < passwordLength; i++) {
        const number = Math.floor(Math.random() * concatCharacters.length);
        passwordValue += concatCharacters.substring(number, number + 1);
    }
    inputTarget.textContent = passwordValue;
    if (concatCharacters.length > 0){
        copyBtn.classList.add('show');
    } else {
        copyBtn.classList.add('hidden')
    }
    concatCharacters = '';
}
generateBtn.addEventListener('click', createPassword);

copyBtn.addEventListener('click' , ()=> {
    navigator.clipboard.writeText(inputTarget.innerText).then();
})

