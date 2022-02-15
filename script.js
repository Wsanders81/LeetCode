const button = document.getElementById('button');
const colorContainer = document.getElementById('colors');
const red = document.getElementById('red');
const orderOfClicks = [];

colorContainer.addEventListener('click', (e) => {
	orderOfClicks.push(e.target.id);
	colorContainer.removeChild(red);
	console.log(orderOfClicks);
});
