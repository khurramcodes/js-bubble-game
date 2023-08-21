let timer = 60;
let score = 0;
let hitRand;

function increaseScore() {
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

function getNewHit() {
    hitRand = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = hitRand;
}

function makeBubble() {
    let clutter = "";
    for (let i = 1; i <= 207; i++) {
        let rand = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rand}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
    let timerInterval = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        } else {
            clearInterval(timerInterval);
            document.querySelector(
                "#pbtm"
            ).innerHTML = `<div id="game-over"><p>GAME OVER</p></div>
            <div id="restart"><p id="btn-restart">Restart</p></div>`;
        }
    }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (e) {
    let clickedNumber = Number(e.target.textContent);
    if (clickedNumber === hitRand) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
});

document.addEventListener("click", function (e) {
    const id = e.target.id;
    if (id == "btn-restart") {
        location.reload();
    }
});

runTimer();
makeBubble();
getNewHit();
