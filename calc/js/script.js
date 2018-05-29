window.onload = function () {
	var display = document.querySelector('.display');
	var digitButtons = document.querySelectorAll('.buttons .buttons-left button:nth-child(n+4)');
	var topButtons = document.querySelectorAll('.buttons .buttons-left button:nth-child(-n+3)');
	var opButtons = document.querySelectorAll('.buttons .buttons-right button');

	var value1 = 0;
	var displayValue1 = 0;
	var displayValue2 = 0;
	var res = 0;
	var op = 0;
	var submitOn = false;
	var firstDigitOk = false;


	for (i = 0; i < digitButtons.length; i++) {
		digitButtons[i].onclick = function () {
			value1 = this.getAttribute('data-value');
			if ((display.innerHTML == '0') && (value1 !== '.') || (firstDigitOk)) {
				display.innerHTML = value1;
				firstDigitOk = false;
			} else {
			display.innerHTML += value1;
			}
		}
	}

	for (i = 0; i < topButtons.length; i++) {
		topButtons[i].onclick = function () {
			if (this.getAttribute('data-value') == 'reset') {
				value1 = 0;
				displayValue1 = 0;
				displayValue2 = 0;
				res = 0;
				op = 0;
				submitOn = false;
			 	firstDigitOk = false;
			} else if (this.getAttribute('data-value') == '-1') {
				value1 = display.innerHTML * (-1);
			} else if (this.getAttribute('data-value') == 'percent') {
				value1 = display.innerHTML / 100;
			}
			display.innerHTML = value1;
		}
	}

	for (i=0; i < opButtons.length; i++) {
		opButtons[i].onclick = function () {
			if (this.getAttribute('data-value') !== 'submit') {
				op = this.getAttribute('data-value');
				displayValue1 = parseInt(display.innerHTML);
				firstDigitOk = true;
			} else {
				if (!submitOn) {
					displayValue2 = parseInt(display.innerHTML);
				} else {
					displayValue1 = parseInt(display.innerHTML);
				}
				if (op == '/') {
					res = displayValue1 / displayValue2;
				} else if (op == '*') {
					res = displayValue1 * displayValue2;
				} else if (op == '-') {
					res = displayValue1 - displayValue2;
				} else if (op == '+') {
					res = displayValue1 + displayValue2;
				}
				
				display.innerHTML = res;
				submitOn = true;
			}
			console.log(op);
			console.log(displayValue1);
		}
	}
	






}