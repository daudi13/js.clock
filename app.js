const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggleEl = document.querySelector('.toggle')

const days = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
const months = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");


toggleEl.addEventListener('click', () => {
    const html = document.querySelector('html');

    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        toggleEl.textContent = 'Dark Mode';
    } else {
        html.classList.add('dark')
        toggleEl.textContent = 'Light Mode'
    }
})