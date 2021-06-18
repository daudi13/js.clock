const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggleEl = document.querySelector('.toggle')
const html = document.querySelector('html')

const days = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
const months = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");


toggleEl.addEventListener('click', (e) => {
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        e.target.innerHTML = 'Dark Mode'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode'
    }
})

function timeSet() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const hour = time.getHours();
    const hourforClock = hour % 12;
    const minute = time.getMinutes();
    const second = time.getSeconds();

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hourforClock, 0, 11, 0, 360)}deg)`;

    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minute, 0, 59, 0, 360)}deg)`;

    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(second, 0, 59, 0, 360)}deg)`;

    timeEl.textContent = `${hour < 10? '0'+ hour: hour}:${minute}:${second< 10? '0'+second: second }`
}

const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

timeSet()

setInterval(timeSet, 1000)