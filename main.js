let currentNumber = 1;

let playing = false;

let interval;

function showSlide3() {
    showSlide(3);
}

function showSlide2() {
    showSlide(2);
}

function showSlide1() {
    showSlide(1);
}

function showSlide(number) {
    document.querySelector(".show").classList.remove("show");
    document.querySelector("#slide" + number).classList.add("show");
    selectPin(number);
    currentNumber = number;
}

function showNextSlide() {
    let newNumber = currentNumber + 1;
    if (newNumber > 3) {
        newNumber = 1
    }
    showSlide(newNumber);
}

document.querySelector("#next").addEventListener("click", showNextSlide);


function showPrevSlide() {
    let newNumber = currentNumber - 1;
    if (newNumber < 1) {
        newNumber = 3
    }
    showSlide(newNumber);
}

document.querySelector("#prev").addEventListener("click", showPrevSlide);


function selectPin(newNumber) {
    document.querySelector(".selected").classList.remove("selected");
    document.querySelector("#pin" + newNumber).classList.add("selected");
}
for(let nrPinu = 1; nrPinu <= 3; nrPinu++) {
    document
        .querySelector("#pin" + nrPinu)
        .addEventListener("click", function() {
            showSlide(nrPinu);
        });
}


function playButtonClicked() {
    if (playing === false) {
        startSlideShow();
    } else {
        stopSlideShow();
    }
}

document.querySelector("#play").addEventListener("click", playButtonClicked);


function startSlideShow() {
    document.querySelector("#play").classList.add("on");
    playing = true;
    interval = setInterval(showNextSlide, 2500);
}

function stopSlideShow() {
    document.querySelector("#play").classList.remove("on");
    playing = false;
    clearInterval(interval);
}

