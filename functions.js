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

function startTest(option) {
    const num = document.getElementById("question");
    switch (option) {
        // binary test
        case 1:
            num.innerText = Math.floor(Math.random() * 255).toString();
            break;

        default:
            break;
    }
}

function bytesNeeded(num) {
    let exp = closestPowerOf2(num);
    console.log(exp)
    return Math.ceil(exp / 8);
}

function toggleBit(num) {
    let bit = document.getElementById("b" + num.toString());
    if (bit.innerText == "0") {
        bit.innerText = "1";
    } else {
        bit.innerText = "0";
    }
}

function checkBits() {
    const num = document.getElementById("question");

    let bits = [];
    for (let i = 0; i < 8; i++) {
        let bit = document.getElementById(`b${i}`);
        if (bit) {
            bits.push(bit.innerText);
        } else {
            alert("couldn't find bit #" + i.toString());
        }
    }

    let numValue = 0;
    for (let index = 0; index < bits.length; index++) {
        const bit = bits[index];
        if (bit == "1") {
            numValue += 2 ** (7 - index);
        }
    }
    console.log(numValue);
    if (numValue == Number.parseInt(num.innerText)) {
        const check = document.getElementById("check");
        
        check.parentElement.removeChild(check);
        
        let prompt = document.getElementById("prompt");
        prompt.innerText = "Correct! Reload the page to do it again!";
        prompt.style.color = "rgb(93, 160, 79)";

        return;
    }
    let prompt = document.getElementById("prompt")
    let buffer = prompt.innerHTML;
    prompt.innerHTML = "Incorrect!"
    prompt.style.color = "rgb(247, 66, 59)";
    setTimeout(() => {
        prompt.innerHTML = buffer;
        prompt.style.color = "white";
    }, 500);
}

function closestPowerOf2(number) {

    // Find the closest power of 2 greater than the given number
    let power = 1;
    let exp = 1;
    while (power < number) {
        power *= 2;
        exp++;
    }

    // Compare the distance of the two closest powers of 2
    const prevPower = power / 2;
    const prevExp = exp - 1;

    const nextExp = exp;
    const nextPower = power;
    return (nextPower - number) < (number - prevPower) ? nextExp - 1 : prevExp - 1;
}