let dmgAmount, atkAttack, atkElement, atkCritHit, defDefense, defElement, defDefended;

addEventListener("load", (event) => {
    dmgAmount = document.getElementById("dmg-amount");
    atkAttack = document.getElementById("atk-damage");
    atkElement = document.getElementById("atk-elements");
    atkCritHit = document.getElementById("atk-crithit");
    defDefense = document.getElementById("def-defense");
    defElement = document.getElementById("def-elements");
    defDefended = document.getElementById("def-defended");

    document.getElementById("calculate").onclick = calculateDamage;
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * max) + min;
}

function applyDmgFormula(damage) {
    switch (atkElement.value) {
        case "fire":
            if (defElement.value == "water") damage /= 2;
            else if (defElement.value == "ground") damage *= 2;
            break;
        case "water":
            if (defElement.value == "electric") damage /= 2;
            else if (defElement.value == "fire") damage *= 2;
            break;
        case "electric":
            if (defElement.value == "ground") damage /= 2;
            else if (defElement.value == "water") damage *= 2;
            break;
        case "ground":
            if (defElement.value == "fire") damage /= 2;
            else if (defElement.value == "electric") damage *= 2;
            break;
        case "light":
            if (defElement.value == "dark") damage *= 2;
            break;
        case "dark":
            if (defElement.value == "light") damage *= 2;
            break;
        default:
            break;
    }

    if (atkCritHit.checked) damage *= 1.5;

    if (defDefended.checked) {
        damage *= (100 - 50 + Math.max(Math.min(parseInt(defDefense.value), 40), 2)) / 100;
    }

    damage -= parseInt(defDefense.value);
    return Math.floor(damage);
}

function calculateDamage() {
    dmgAmount.innerHTML = "0";
    let damage = parseFloat(atkAttack.value);
    let minDmg = 0.5 * damage;
    let maxDmg = 1.5 * damage;    
    
    dmgAmount.innerHTML = applyDmgFormula(minDmg).toString() + "-" + applyDmgFormula(maxDmg).toString();
}
