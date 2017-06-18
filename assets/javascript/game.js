


var computerChoices = ["a","b","c","d","e","f","g","h","i",
						"j","k","l", "m","n","o","p","q","r",
						"s","t","u","v","w","x","y","z"];



var win = 0;
var loss = 10;


		var userText = document.getElementById("user-text");
		var computerText = document.getElementById("computer-text");
		var guessed = document.getElementById("inputs");
		var remain = document.getElementById("remain");
		var score = document.getElementById("wins");

		remain.textContent = loss;
		score.textContent = win;

		function userGuesses(){
			var userGuess = event.key;
			userText.textContent = userGuess;
		}	
		

		function computerGuesses(){
			var computerGuess = computerChoices[Math.floor(Math.random()* computerChoices.length)];
			computerText.textContent = computerGuess;
		}




document.onkeyup = function(event) {

	computerGuesses();
	userGuesses(event.key);

	if (userGuess){
		loss-= 1;
	}

}
	 


// Sorry I broke the code while trying to rewrite and clean it up. Still working....
// Having the most trouble getting all of the "guessed" letters on the "letters already guessed" div


	// if (userGuess){
	// //  	 loss -= 1;
	// //  }
	// // if (userGuess == computerGuess){
	// // 	score.textContent = win++;
	// //  } 
	// // if(userGuess !== computerGuess){
	// // 	userInput.push(userGuess);
	// //  	inputs.innerHTML = userInput;
	// //  }

	// //  if (win == 4){
	// //  	alert("You win!")
	// //  }
	
	// //  }
	// //  if (loss == 0){
	// //  	alert("No more tries");
	
	 

	
	 









	
