const remainingDays = document.getElementById('days');
const remainingHours = document.getElementById('hours');
const remainingMinutes = document.getElementById('minutes');
const remainingSeconds = document.getElementById('seconds');
const newYear = '1 Jan 2022';

function calculateDate() {
	const newYearDate = new Date(newYear);
	const currentDate = new Date();

	const totalSeconds = (newYearDate - currentDate) / 1000;
	const days = Math.floor(totalSeconds / 3600 / 24);
	const hours = Math.floor(totalSeconds / 3600) % 24;
	const minutes = Math.floor(totalSeconds / 60) % 60;
	const seconds = Math.floor(totalSeconds) % 60;

	remainingDays.textContent = days;
	remainingHours.textContent = hours;
	remainingMinutes.textContent = minutes;
	remainingSeconds.textContent = seconds;
}

setInterval(calculateDate, 1000);
