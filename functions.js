const numOfBits = 8;
const maxNum = 2 ** numOfBits - 1;

let num = 0;

function redirect(option) {
    switch (option) {
        case 1:
            window.location.href = "binary.html";
            break;
        case 2:
            window.location.href = "logical-or.html";
            break;

        case 3:
            window.location.href = "logical-and.html";
            break;

        default:
            window.location.href = "index.html";
            break;
    }
}


// return random number between min and max
function randomNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
}

// toggle bit from 0 -> 1 or vice versa
function toggleBit(bitNum) {
    let bit = document.getElementById("b" + bitNum.toString());
    if (bit.innerText == "0") {
        bit.innerText = "1";
        return;
    }
    bit.innerText = "0";
}

// Fetch the user's bits and put them into a list
function getBits() {
    let bits = [];
    for (let i = 0; i < numOfBits; i++) {
        let bit = document.getElementById(`b${i}`);
        if (bit) {
            bits.push(bit.innerText);
        } else {
            alert("couldn't find bit #" + i.toString());
        }
    }
    return bits;
}

// Convert list of bits into an integer
function binaryToInteger(bits) {
    let numValue = 0;
    for (let index = 0; index < bits.length; index++) {
        const bit = bits[index];
        if (bit == "1") {
            numValue += 2 ** (numOfBits - 1 - index);
        }
    }
    return numValue;
}

// Tell user that answer is incorrect, revert to normal prompt after 1/2 of a second, called when number is incorrect
function handleIncorrect(prompt) {
    let buffer = prompt.innerHTML;

    prompt.innerHTML = "Incorrect!";
    prompt.style.color = "rgb(247, 66, 59)";

    setTimeout(() => {
        prompt.innerHTML = buffer;
        prompt.style.color = "white";
    }, 500);
}

// set all bits to 0
function resetBits() {
    for (let i = 0; i < numOfBits; i++) {
        document.getElementById(`b${i}`).innerText = "0";
    }
}

// Tell user that they are correct and create new problem, called when number is correct
function handleCorrect(prompt) {
    let buffer = prompt.innerHTML;
    prompt.innerHTML = "Correct! Creating new problem...";
    prompt.style.color = "rgb(93, 160, 79)";

    setTimeout(() => {
        prompt.style.color = "white";
        prompt.innerHTML = buffer;

        resetBits();
        generateNew();


    }, 1000);
}

// generate new problem
function generateNew() {
    const numQ = document.getElementById("question");
    num = randomNumber(0, maxNum);  
    numQ.innerText = num.toString();
}

// get the user's bits and return value as integer
function getBitsToInteger() {
    return binaryToInteger(getBits());
}

// Check if user's bits are correct, handle accordingly
function checkBits() {
    let numValue = getBitsToInteger();

    let prompt = document.getElementById("prompt")
    
    if (numValue == num) {
        handleCorrect(prompt);
        return;
    }
    handleIncorrect(prompt)
}