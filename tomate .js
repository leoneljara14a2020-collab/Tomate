function changeTheme() {
	const body = document.body;
	const button = document.getElementById('button');

	if (button.innerHTML === 'Modo Oscuro') {
		body.style.backgroundColor = '#222';  // Cambia solo el color, no la imagen
		body.style.color = 'white';
		button.innerHTML = 'Modo Claro';
	} else {
		body.style.backgroundColor = 'white';
		body.style.color = '#555';
		button.innerHTML = 'Modo Oscuro';
	}
}

