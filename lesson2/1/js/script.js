window.onload = function () {
	var week = [
		'Понедельник',
		'Вторник',
		'Среда',
		'Четверг',
		'Пятница',
		'Суббота',
		'Воскресенье'
	];

	var days = document.querySelector('.days');
	var element;
	var date = new Date;

		for (var i = 0; i < week.length; i++) {
			element = document.createElement('li');
				if (i == 5 || i == 6) {
					element.classList.add('weekend');
				}

				if (((i + 1) == date.getDay()) || ((i == 6) && (date.getDay() == 0))) {
					element.classList.add('current');
				}
			element.textContent = week[i];
			days.appendChild(element);
		}
	
}