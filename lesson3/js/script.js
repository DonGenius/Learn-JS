window.onload = function () {
	var str = 'урок-3-был слишком легким';

	//str = str.charAt(0).toUpperCase() + str.substring(1);
	str = str.replace(str.charAt(0), str.charAt(0).toLocaleUpperCase());
	console.log(str);

/* 	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) == '-') {
			str = str.substring(0,i) + ' ' + str.substring(i + 1);
		}
	} */

	str = str.replace(/-/g, ' ');

	console.log(str);
}