window.onload = function () {
	var num = +prompt('Введите длинное число (3 и более цифр):');
	//найдем количество цифр в числе
	var digitCount = Math.max(Math.floor(Math.log10(Math.abs(num))), 0) + 1;
	console.log(digitCount);
	var res = 1;

	//перемножим все 
	for (i = 1; i <= digitCount; i++) {
		res *= Math.floor((num / Math.pow(10, i - 1)) % 10);
		console.log(res);
	}
	//вывод на экран возведенного в 3 степень числа
	alert(Math.pow(res, 3));
}