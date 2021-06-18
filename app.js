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