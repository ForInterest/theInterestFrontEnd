
function component(){
	let element = document.createElement('div');
	element.innerHTML = 'hello webpack dd';

	return element;
}

document.body.appendChild(component());