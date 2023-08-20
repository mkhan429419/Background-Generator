var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");
var button=document.querySelector("button");

setGradient();

function setGradient() {
	body.style.background="linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

function getCharacter(index) {
	return hexCharacters[index];
}

function generateNewColor() {
	let hexColorRep = "#";

	for (let index = 0; index < 6; index++) {
		const randomPosition = Math.floor ( Math.random() * hexCharacters.length ) ;
    	hexColorRep += getCharacter( randomPosition );
	}
	
	return hexColorRep;
}

function setNewColor1() {
	color1.value=generateNewColor();
	setGradient();
}

function setNewColor2() {
	color2.value=generateNewColor();
	setGradient();
}

button.addEventListener("click", setNewColor1);

button.addEventListener("click", setNewColor2);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);