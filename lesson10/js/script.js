class Options {
	constructor(height, width, bgc, fontSize, textAlign) {
		this.height = height + 'px';
		this.width = width + 'px';
		this.bgc = bgc;
		this.fontSize = fontSize + 'px';
		this.textAlign = textAlign;
	}

	createDiv(text) {
			let element = document.createElement('div');
			element.textContent = text;
			element.style.height = this.height;
			element.style.width = this.width;
			element.style.backgroundColor = this.bgc;
			element.style.fontSize = this.fontSize;
			element.style.textAlign = this.textAlign;
			document.body.appendChild(element);
			return element;
	}
}

let option = new Options(50, 300, 'red', 20, 'center');
let option2 = new Options(50, 300, 'green', 30, 'center');

option.createDiv('Hello');
option2.createDiv('World')
