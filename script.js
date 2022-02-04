let numbers = [...'1234567890'];
let upperCase = [...'QWERTYUIOPASDFGHJKLZXCVBNM'];
let lowerCase = [...'zxcvbnmlkjhgfdsapoiuytrewq'];
let symbols = [...'!@#$%^&*_+><?'];

const generateBtn = document.querySelector('.generate-btn');
const inputTarget = document.querySelector('.text-block');

let concatArrays = numbers.concat(upperCase, lowerCase, symbols);
// console.log(concatArrays);

function random (a, b) {
    return Math.random()-0.5;
}
let total = concatArrays.sort(random);
let full_list = '';

function getFirstElem () {
    for(let i=0; i < 10; ++i){
        full_list = full_list + total[i];
    }
}

generateBtn.addEventListener('click', (ev)=> {
    getFirstElem();
    inputTarget.textContent = full_list;
    console.log(full_list)
})

// console.log(upperCase[Math.floor(Math.random()*upperCase.length)])