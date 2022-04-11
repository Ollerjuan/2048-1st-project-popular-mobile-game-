// I will first pull all the values that i will be using from the html 
const game = document.querySelectorAll('.container')
const allCells = document.querySelector('.cell')
const start = document.querySelector('.new')
const resultDisplay = document.getElementById('result')
let modifier = 5;
const lengths = 4
const width = 4
let cells = []
// [
//     [0,0,0,0],
//     [0,0,0,0],
//     [0,0,0,0],
//     [0,0,0,0],
// ];


// create a function for the start button to allow the user to begin playing 

// function newGame() {
//     window.start = new Game(4);
//     window.start.initialize();
//    }
// console.log(newGame);
   


// get numbers to generate on the grid square first 

function newGame(){
    for (let i = 0; i < lengths * width; i++){
            cell = document.createElement('div')
            cell.innerHTML = ''
            allCells.appendChild(cell)
            cells.push(cell)
        }
    }

console.log(newGame())

// create my an array with the frst two numbers that can be used to start and continue the game (2 or/& 4)
// created 2 functin that generate two and four randomly but will always have 2 numbers generate at the start of the game
        function generateNewNumber() {
            let randomNumber = Math.floor(Math.random() * cells.length);
            if (cells[randomNumber].innerHTML == 0){
            cells[randomNumber].innerHTML = 2;
            } else generateNewNumber('')
        }
        console.log(generateNewNumber(2))

        function generateNew() {
            let randomNumber = Math.floor(Math.random() * cells.length);
            if (cells[randomNumber].innerHTML == 0){
            cells[randomNumber].innerHTML = 4 ;
            } else generateNewNumber('')
        }
        
        console.log(generateNew(4)) 


// allow those number be swiped left, right up or down using  keyboard function 

// creating a loop 
function swipeRight(){
    for (let i = 0; i < 16; i++){
        if (i % 4 === 0){
    // naming each row to let the loop run
        let rowOne = cells[i].innerHTML
            let rowTwo = cells[i+1].innerHTML
                let rowThree = cells[i + 2].innerHTML
                    let rowFour = cells[i + 3].innerHTML
// using parseInt to in order to convert string to an integer 
        let lengths = [parseInt(rowOne),parseInt(rowTwo),
            parseInt(rowThree),parseInt(rowFour)]
         

//Create filter that will check for empty cells
            let filterLengths = lengths.filter(num => num)
                let result = 4 - filterLengths.length
                    let none = Array(result).fill('')

// using a concatenate to join none and filter length 
                    let checkRows = none.concat(filterLengths)
                        cells[i].innerHTML = checkRows[0]
                            cells[i+1].innerHTML = checkRows[1]
                                cells[i+2].innerHTML = checkRows[2]
                                    cells[i+3].innerHTML = checkRows[3]
    }
}
}
swipeRight()

// creating a loop 
function swipeLeft(){
    for (let i = 0; i < 16; i++){
        if (i % 4 === 0){
    // naming each row to let the loop run
        let rowOne = cells[i].innerHTML
            let rowTwo = cells[i+1].innerHTML
                let rowThree = cells[i+2].innerHTML
                    let rowFour = cells[i+3].innerHTML
// using parseInt to in order to convert string to an integer 
        let length = [parseInt(rowOne),parseInt(rowTwo),
            parseInt(rowThree),parseInt(rowFour)]


//Create filter that will check for empty cells
            let filterLength = length.filter(num => num)
                let result = 4- filterLength.length
                    let none = Array(result).fill('')

// using a concatenate to join none and filter length 
                    let checkRows = none.concat(filterLength)
                        cells[i].innerHTML = checkRows[0]
                            cells[i+1].innerHTML = checkRows[1]
                                cells[i+2].innerHTML = checkRows[2]
                                    cells[i+3].innerHTML = checkRows[3]
    }
}
}
swipeLeft()

// create my function that will allow the numbers to double when they are swipped into each other but only 
//if they are the same number 

    function combineNumbers(){
        for (let i = 0; i < 15; i++ ){
            if (cells[i].innerHTML === cells[i+1].innerHTML){
                let total = parseInt(cells[i].innerHTML) + parseInt(cells[i+1].innerHTML)
                    cells[i+1].innerHTML = ''
                    cells[1].innerHTML = total
            }
        }
    }
 window.addEventListener('keyUp', (e) => {
    switch (e.key){
        case "ArrowUp": length.style.top= parseInt(lengths.style.top) - move + "px"; break;
        case "ArrowDown": style.top= `${parseInt(lengths.style.top) - modifier}px`; break;
        case "ArrowLeft": style.left= `${parseInt(lengths.style.left) - modifier}px`; break;
        case "ArrowRight": lengths.left= parseInt(lengths.style.top) +move + "px"; break;

    }
})


//create function that allows players to swiper using keyboard  


// create win game once the player has reach 2048 






// create an end game if the player does not have anymore space left to swipe and has not reached 2048