// Get the DOM elements and initialize the game

const input = document.querySelector('input'),
        guess = document.querySelector('.guess'),
        checkBtn = document.querySelector('button'),
        remainChanses = document.querySelector('.chances');

// Set the focus on input field

input.focus();

let randomNum = Math.floor(Math.random() * 100);

chance = 10;
console.log(randomNum);
// Click Event Listener on Check button

checkBtn.addEventListener('click', () => {
    chance--;

    // Get the value from the input field

    let inputValue = input.value;

    // Check if the input value is equal to the random number

    if (inputValue == randomNum) {

        //Update guessed numer, disable input, check button text and color

        [guess.textContent, input.disabled] = ["Congratulations !!!", true];
        [checkBtn.textContent, guess.style.color] = ["Replay", "#1621FF"];
        guess.style.fontSize = '20px';
        

    } else if (inputValue > randomNum && inputValue < 100) {
        //Check if input value is > random number and 1-99 range

        [guess.textContent, remainChanses.textContent] = ["Your guess is high", chance];
        guess.style.color = '#880808';
        guess.style.fontSize = '20px';
        

    } else if (inputValue < randomNum && inputValue > 0) {
        //Check if input value is < random number and 1-99 range
        [guess.textContent, remainChanses.textContent] = ["Your guess is low", chance];
        guess.style.color = '#880808';
        guess.style.fontSize = '20px';

    } else {
        [guess.textContent, remainChanses.textContent] = ["Your number is invalid", chance];
        guess.style.color = '#880808';
        guess.style.fontSize = '20px';
    }
    //Check if the chance is 0 

    if (chance === 0) {
        [checkBtn.textContent, input.disabled, inputValue] = ["Replay", true, ""];
        [guess.textContent, guess.style.color] = ["You lost the game", "#DE0611"];
        guess.style.fontSize = '20px';
    }
    
    if (chance < 0) {
        window.location.reload();
    }

});