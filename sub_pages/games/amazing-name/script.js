function showName() {
	let name = document.getElementById("name-input").value;
	let container = document.getElementById("name-container");
	container.innerHTML = "";

	for(let i = 0; i < name.length; i++) {
		let letter = document.createElement("span");
		letter.classList.add("letter");
		letter.innerText = name[i];
		letter.addEventListener("mouseover", addAnimation);
		letter.addEventListener("mouseout", removeAnimation);
		container.appendChild(letter);
	}
}

function addAnimation(event) {
	let letter = event.target;
	letter.classList.add("animate");
	document.body.style.backgroundColor = getRandomColor();
}

function removeAnimation(event) {
	let letter = event.target;
	letter.classList.remove("animate");
	document.body.style.backgroundColor = "#1a1a1a";
}

function getRandomColor() {
	let letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
