let colorButtons = document.querySelectorAll('.colorButton');

for(let colorButton of colorButtons) {
    colorButton.onclick = function () {
        let parent = colorButton.parentElement;
        if (parent.classList.contains('interest')) {
            parent.classList.remove('interest');
        } else {
         parent.classList.add('interest');
        }
    };
}

