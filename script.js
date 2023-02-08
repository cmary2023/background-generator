//  returns the first element that matches a CSS selector.
// store in a var
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("random");


// Function that gets the user input values and then changes the background
// style to them and also displays them

function setGradient() {
	body.style.background = //Return the background property and set it
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";//sets or returns the text content of the specified node
	//linear-gradient(to right, rgb(21, 24, 112), rgb(129, 141, 37));
}

// Function that generates a random number from 0 to 255

function noGenerator() {
	return Math.round(Math.random() * 255);
}

// Function that converts the random number to a string with base 16
// The number will show as an hexadecimal value

function rgbToHex() { 
  var hex = noGenerator().toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
};

// Function that creates the final hex number by combining 
// 3 random rgbToHex values

function randomColorNo() {
	var randomC = "#" + rgbToHex()
				 + rgbToHex()
				 + rgbToHex();
	return randomC;
}

// Function that changes the color1 and color 2 values to the random ones
// and then runs the first function 'setGradient' with the new values

function setGradientRandom() {
	color1.value = randomColorNo();
	color2.value = randomColorNo();
	setGradient()
} 

color1.addEventListener("input", setGradient); //change the gradient
color2.addEventListener("input", setGradient);
randomBtn.addEventListener("click", setGradientRandom);