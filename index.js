import { stringLength, test } from "./modules/stringLenght.js";
import ReverseString from "./modules/reverseString.js";

// input and output for task 1

const input = document.getElementById('input');
const output = document.getElementById('output');

//  input and output for task 2

const inputa = document.getElementById('inputa');
const outputa = document.getElementById('outputa');

input.addEventListener('keyup',(e)=>{
    const checker = test(input.value);
    if (checker === false){
        e.preventDefault();
        output.value = "";
    }else{
        stringLength(input.value);
    }   
});

// task 2

inputa.addEventListener('keyup', () => {
    outputa.innerHTML = ReverseString(inputa.value);
});
