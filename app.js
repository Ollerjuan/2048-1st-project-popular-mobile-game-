// I will first pull all the values that i will be using from the html 
const game = document.querySelectorAll('.container')
const gridDisplay = document.querySelector('.cell')
const start = document.querySelector('.new')
const resultDisplay = document.getElementById('result')
const length = 4
const width = 4
let cells = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
];


// create a function for the start button to allow the user to begin playing 




// get numbers to generate on the grid square first 

function newGame(){
    for (let i=0; i < length*width; i++){
            cell = document.createElement('div')
            cell.innerHTML = 0
            gridDisplay.appendChild(cell)
            cells.push(cell)
        }
// create my an array with the frst two numbers that can be used to start and countiue the game (2 or/& 4)

        function generateNewNumber() {
            let randomNumber = Math.floor(Math.random() * cells.length);
            if (cells[randomNumber].innerHTML == 0){
            cells[randomNumber].innerHTML =  2;
            } else generateNewNumber()
        }
        console.log(generateNewNumber())

}
console.log(newGame())






// allow those number be swiped left, right up or down using  keyboard function 




// document.addEventListener('keyup' control)







// create my function that will allow the numbers to double when they are swipped into each other but only 
//if they are the same number 



// stop number from combing if they are not the same #



//create a function that will allow a 2 or a 4 to pop up every time a number is swipped into an empty grid




// create win game once the player has reach 2048 






// create an end game if the player does not have anymore space left to swipe and has not reached 2048