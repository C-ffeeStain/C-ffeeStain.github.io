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

const numOfBits = 8;
const maxNum = 255;

let numQ = 0;

function randomNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
}

function toggleBit(num) {
    let bit = document.getElementById("b" + num.toString());
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
function binToInt(bits) {
    let numValue = 0;
    for (let index = 0; index < bits.length; index++) {
        const bit = bits[index];
        if (bit == "1") {
            numValue += 2 ** (numOfBits - 1 - index);
        }
    }
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

// Remove the Check button and tell the user to reload, called when number is correct
function handleCorrect(prompt) {
    const check = document.getElementById("check");

    check.parentElement.removeChild(check);

    prompt.innerText = "Correct! Reload the page to do it again!";
    prompt.style.color = "rgb(93, 160, 79)";
}

// Check if user's bits are correct, handle accordingly
function checkBits() {
    let numValue = binToInt(getBits());

    let prompt = document.getElementById("prompt")
    
    if (numValue == numQ) {
        handleCorrect(prompt);
        return;
    }
    handleIncorrect(prompt)
}