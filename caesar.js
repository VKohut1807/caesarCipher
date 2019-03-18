'use strict';

function caesar(){
var alfabetSmall = ("abcdefghijklmnopqrstuvwxyz");
var alfabetLarge = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var otherElem = ("-=~\"\'#$%&*^:<>?/!{(|)}.1234567890\,");
var obj = document.getElementById("in").value;
var newObj = "";
var shift = document.getElementById("shift").value;
	for (var i = 0; i < obj.length; i++){
		var currentLetter = obj[i];
		if (currentLetter === " " || currentLetter === "\n"){
				newObj += currentLetter;
				continue;
		}

	// cipher of small alfabet	
		if (obj[i].toLowerCase() === obj[i] && obj[i].toLowerCase() !== obj[i].toUpperCase()){
			var currentIndex = alfabetSmall.indexOf(currentLetter);
			var newIndex = currentIndex + (+shift % 26); //tomu szczo wyznaczaje wwedenu cyfru jak tekst
			if (newIndex > 25) {
				newIndex = newIndex - 26;
			}
			if (newIndex < 0) {
				newIndex = newIndex + 26;
			}
			newObj += alfabetSmall[newIndex];

	// cipher of large alfabet
		} else if (obj[i].toUpperCase() === obj[i] && obj[i].toUpperCase() !== obj[i].toLowerCase()){
			var currentIndex = alfabetLarge.indexOf(currentLetter);
			var newIndex = currentIndex + (+shift % 26); //tomu szczo wyznaczaje wwedenu cyfru jak tekst
			if (newIndex > 25) {
				newIndex = newIndex - 26;
			}
			if (newIndex < 0) {
				newIndex = newIndex + 26;
			}
			newObj += alfabetLarge[newIndex];

	// cipher of other elements		
		}else{
			var currentIndex = otherElem.indexOf(currentLetter);
			var newIndex = currentIndex + (+shift % 34); //tomu szczo wyznaczaje wwedenu cyfru jak tekst
			if (newIndex > 33) {
				newIndex = newIndex - 34;
			}
			if (newIndex < 0) {
				newIndex = newIndex + 34;
			}
			newObj += otherElem[newIndex];
		}
	} 
document.getElementById('out').innerHTML = newObj;
}