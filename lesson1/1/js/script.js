window.onload = function () {
	var budget = prompt('Ваш бюджет на месяц?');
	var nameShop = prompt('Название Вашего магазина?');
	var mainList = {
		budget: budget,
		nameShop: nameShop,
		shopGoods: [],
		employers: {},
		open: function () {

		}
	}

	for (i = 0; i < 3; i++) {
		mainList.shopGoods[i] = prompt('Какой тип товара будем продавать?'); 
	}

	console.log(mainList);

	alert('Ваш бюджет на 1 день сотавляет ' + budget / 30 + ' рублей');

}