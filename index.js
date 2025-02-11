const countDownElement = document.querySelector("#countDown");
const resetValueElement = document.querySelector(".resetValue");
let start = 0;
let stop = null;

const startTimer = () => {
    if (stop === null) {
        stop = setInterval(() => {
            countDownElement.innerText = start++;
        }, 1000);
    }
};

const stopTimer = () => {
    clearInterval(stop);
    showStopValue();
    stop = null;
};

const resetTimer = () => {
    start = 0;
    countDownElement.innerText = start;
    clearInterval(stop);
    stop = null;
};

let newP;
const showStopValue = () => {
    newP = document.createElement("p");
    newP.innerText =
        (start === 0) ? `The stop time is 0` :
        `The stop time is ${start - 1}`;
    resetValueElement.append(newP);
};

const clearTimeValue = () => {
    resetValueElement.innerText = "";
};

document.querySelector(".start_btn").addEventListener("click", startTimer);
document.querySelector(".reset_btn").addEventListener("click", resetTimer);
document.querySelector(".stop_btn").addEventListener("click", stopTimer);
document.querySelector(".time_btn").addEventListener("click", showStopValue);
document.querySelector(".clear_btn").addEventListener("click", clearTimeValue);
