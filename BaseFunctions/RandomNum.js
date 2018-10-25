const minTarget = 19;
const maxTarget = 120;
const minCrystals = 1;
const maxCrystals =12;
let crystals = [];
const crystalCount = 4;
let cTotal = 0;
let targetNum = 0;
let wins = 0;
let losses = 0;

function genRandNum (min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reset () {
    targetNum = genRandNum(minTarget,maxTarget);
    document.getElementById('crystal-num').innerHTML = targetNum;
    cTotal = 0;
    document.getElementById('cTotal').innerHTML = cTotal;
    crystals = [];
    for (let i=0; i < crystalCount; i++) {
        crystals.push(genRandNum(minCrystals,maxCrystals));
    }
    for (let i=0; i < crystals.length; i++) {
        document.getElementById('crystal'+ (i + 1)).innerHTML = crystals[i];
    }
}

function crystalNumDisplay () {
    crystalNum = genRandNum(minCrystals,maxCrystals);
}

function cValAdd (e) {
    const index = e.target.dataset.value
    console.log(crystals[index]);
    cTotal = cTotal + crystals[index];
    document.getElementById('cTotal').innerHTML = cTotal;
    if (cTotal === targetNum) {
        wins += 1; 
        document.getElementById('wins').innerHTML = wins;
        reset();
    } else if (cTotal > targetNum) {
        losses +=1;
        document.getElementById('losses').innerHTML = losses;
        reset();
    }

}

// document.getElementById('cTotal').innerHTML = cTotal;

// let crystalBall = genRandNum(minTarget,maxTarget);

document.getElementById('crystalBallNum').onclick = reset;

// for (let i=0; i < crystalCount; i++) {
//     crystals.push(genRandNum(minCrystals,maxCrystals));
// }

for (let i=0; i < crystalCount; i++) {
    document.getElementById('cbtn' + (i + 1)).onclick = cValAdd;
}

// for (let i=0; i < crystals.length; i++) {
//     document.getElementById('crystal'+ (i + 1)).innerHTML = crystals[i];
// }

reset();

