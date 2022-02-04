const generateBtn = document.querySelector('.generate-btn');
const inputTarget = document.querySelector('.text-block');
const characterRange = document.getElementById('characterLength');
const firstCheckBox = document.getElementById('includeUpper');
const secondCheckBox = document.getElementById('includeLower');
const thirdCheckBox = document.getElementById('includeNumbers');
const forthCheckBox = document.getElementById('includeSymbols');

let numbers = '1234567890';
let upperCase = 'QWERTYUIOPASDFGHJKLZXCVBNM';
let lowerCase = 'zxcvbnmlkjhgfdsapoiuytrewq';
let symbols = '!@#$%^&*_+><?';
let passwordLength = '';
let passwordValue = '';

let concatCharacters = '';


const createPassword = () =>{
    passwordLength = characterRange.value;
    concatCharacters += firstCheckBox.checked ? upperCase : '';
    concatCharacters += secondCheckBox.checked ? lowerCase : '';
    concatCharacters += thirdCheckBox.checked ? numbers : '';
    concatCharacters += forthCheckBox.checked ? symbols : '';
    passwordValue = '';
    for (let i = 0; i < passwordLength; i++) {
        let number = Math.floor(Math.random() * concatCharacters.length);
        passwordValue += concatCharacters.substring(number, number + 1);
    }
    inputTarget.textContent = passwordValue;
    concatCharacters = '';
}
generateBtn.addEventListener('click', createPassword);
