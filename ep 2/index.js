const hourText = document.querySelector('.hourText');
const minuteText = document.querySelector('.minuteText');
const secondText = document.querySelector('.secondText');

const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

let minuteVal = new Date().getMinutes();
let hourVal = new Date().getHours();
const onloadHandler = () => {
    hourText.innerHTML = hourVal
    minuteText.innerHTML = minuteVal
    secondText.innerHTML = new Date().getSeconds();
    setSecondsDeg(new Date().getSeconds());
    setMinutesDeg(minuteVal);
    setHoursDeg(hourVal)

    setSeconds();
}

const setSeconds = () => {
    setInterval(() => {
        let seconds = new Date().getSeconds();
        secondText.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
        setSecondsDeg(seconds);

        if (seconds === 0 || seconds === 00) {
            setMinutes();
        }
    }, 1000);
}

const setSecondsDeg = (secondParam) => {
    let secondsDeg = ((secondParam / 60) * 360) + 90;
    setDeg(second, secondsDeg);
}

const setMinutes = () => {
    let minutes = new Date().getMinutes();
    minuteText.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    setMinutesDeg(minutes);

    if (minutes === 0 || minutes === 00) {
        setHours();
    }
}

const setMinutesDeg = (minuteParam) => {
    let minutesDeg = ((minuteParam / 60) * 360) + ((new Date().getSeconds() / 60) * 6) + 90;
    setDeg(minute, minutesDeg);
}

const setHours = () => {
    let hours = new Date().getHours();
    hourText.innerHTML = hours < 10 ? `0${hours}` : hours;
    setHoursDeg(hours)
}

const setHoursDeg = (hourParam) => {
    let hourDeg = ((hourParam / 60) * 360) + ((new Date().getMinutes() / 60) * 30) + 90;
    setDeg(hour, hourDeg);
}

const setDeg = (element, deg) => {
    element.style.webkitTransform = 'rotate(' + deg + 'deg)';
    element.style.mozTransform = 'rotate(' + deg + 'deg)';
    element.style.msTransform = 'rotate(' + deg + 'deg)';
    element.style.oTransform = 'rotate(' + deg + 'deg)';
    element.style.transform = 'rotate(' + deg + 'deg)';
}

window.onload = onloadHandler