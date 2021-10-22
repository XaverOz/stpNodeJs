let colorButtons = document.querySelectorAll('.colorButton');

for(let colorButton of colorButtons) {
    colorButton.onclick = function () {
        fetch('./Score').then((response) => {
			return response.json();
		})
		.then((data) => {
			var cells = colorButton
				.parentElement
				.getElementsByClassName('score');
			cells[0].textContent = data["Lions"];
			cells[1].textContent = data["Team Empire"];
		});
    };
}

