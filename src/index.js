function component(){
    var element = document.createElement('div');

    element.innerHTML = 'hello webpack 22dd';

    return element;
}

document.body.appendChild(component());