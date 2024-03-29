// I will first pull all the values that i will be using from the html (using bootstrap)
const game = document.querySelectorAll('.container')
const allCells = document.querySelector('.cell')
const start = document.querySelector('.new')
const resultDisplay = document.getElementById('result')
const lengths = 4
const width = 4
let cells = []


// create a addeventlistener for the new Game button to allow the user to restart

start.addEventListener('click', () => {
    cells.forEach(square => {
        square.innerHTML = '';
        gameActive = true;

    })
}) 

// get numbers to generate on the grid square first 

function newGame(){
    //used length * width in for loop to run through the amount of tiles
    for (let i = 0; i < lengths * width; i++){
            cell = document.createElement('div')
            cell.innerHTML = ''
            allCells.appendChild(cell)
            cells.push(cell)
        }
       
    }

// create 2 functions that generate two and four randomly but will always have 2 numbers generate at the start of the game and only one during the game
// generates a 2 after each swipe    
function generateNewNumber() {
            let randomNumber = Math.floor(Math.random() * cells.length);
            if (cells[randomNumber].innerHTML == 0){
            cells[randomNumber].innerHTML = 2 ;
            
            } else generateNewNumber()
        }
        
// randomly generates 4 after each swipe
        function generateNew() {
            let randomNumber = Math.floor(Math.random() * cells.length);{
            if (cells[randomNumber].innerHTML == 0){
            cells[randomNumber].innerHTML = 4 ;
          
            } else generateNew()
        }  
    }
     
console.log(newGame())
generateNew()
generateNewNumber() 


// generate win function by creating a loop
    function winner(){
        for(let i = 0; i < length * width; i++){
            if (cells[i]=== 2048){
                alert("You WIN")
            }
        }
    }


// allow those number be swiped left, right up or down using  keyboard function 

// creating a for loop 
function swipeRight(){
    for (let i = 0; i < 16; i++){
        if (i % 4 === 0){
// naming each row to let the loop run
            let rowOne = cells[i].innerHTML
                let rowTwo = cells[i+1].innerHTML
                let rowThree = cells[i+2].innerHTML
                let rowFour = cells[i+3].innerHTML
// using parseInt in order to convert string to an integer 
        let length = [parseInt(rowOne),parseInt(rowTwo),
            parseInt(rowThree),parseInt(rowFour)]


//Create filter that will check for empty cells
            let filterLengths = length.filter(num => num)
                let result = 4- filterLengths.length
                let none = Array(result).fill('')

// using a concatenate (variable to string) to join none and filter length 
                    let checkRows = none.concat(filterLengths)
                        cells[i].innerHTML = checkRows[0], cells[i+1].innerHTML = checkRows[1]
                         cells[i+2].innerHTML = checkRows[2], cells[i+3].innerHTML = checkRows[3]
        }
    }
}
swipeRight()

function swipeLeft(){
    for (let i = 0; i < 16; i++){
        if (i % 4 === 0){
 // naming each row to let the loop run and store number
            let rowOne = cells[i].innerHTML
            let rowTwo = cells[i+1].innerHTML
            let rowThree = cells[i+2].innerHTML
            let rowFour = cells[i+3].innerHTML
// using parseInt to in order to convert string to an integer 
        let length = [parseInt(rowOne),parseInt(rowTwo),
            parseInt(rowThree),parseInt(rowFour)]


//Create filter that will check for empty cells
            let filterLengths = length.filter(num => num)
                let result = 4- filterLengths.length
                    let none = Array(result).fill('')

// using a concatenate to join none and filter length 
                    let checkRows = filterLengths.concat(none)
                        cells[i].innerHTML = checkRows[0], cells[i+1].innerHTML = checkRows[1]
                         cells[i+2].innerHTML = checkRows[2], cells[i+3].innerHTML = checkRows[3]
        }
    }   
}

swipeLeft()


//swipeDown
function swipeDown(){
    for (let i = 0; i < 4; i++){
       //checking for number going down the column
        let rowOne = cells[i].innerHTML
            let rowTwo = cells[i+width].innerHTML
            let rowThree = cells[i+width*2].innerHTML
            let rowFour = cells[i+width*3].innerHTML
            let column = [parseInt(rowOne),parseInt(rowTwo),
            parseInt(rowThree),parseInt(rowFour)]

 //Create filter that will check for empty cells in the column
    let filterWidth = column.filter(num => num)
    let result = 4 - filterWidth.length
    let none = Array (result).fill('')

    // using a concatenate to join none and filter length 
    let newWidth = none.concat(filterWidth)
         cells[i].innerHTML = newWidth[0], cells[i+width].innerHTML = newWidth[1]
        cells[i+width*2].innerHTML = newWidth[2], cells[i+width*3].innerHTML = newWidth[3]
}
}
console.log(swipeDown())

//swipUp
function swipeUp(){
    for (let i = 0; i < 4; i++){
       //checking for number going down the column
        let rowOne = cells[i].innerHTML
            let rowTwo = cells[i+width].innerHTML
            let rowThree = cells[i+width*2].innerHTML
            let rowFour = cells[i+width*3].innerHTML
        let column = [parseInt(rowOne),parseInt(rowTwo),
            parseInt(rowThree),parseInt(rowFour)]

 //Create filter that will check for empty cells in the column
    let filterWidth = column.filter(num => num)
    let result = 4 - filterWidth.length
    let none = Array (result).fill('')

    // using a concatenate to join none and filter length 
    let newWidth = filterWidth.concat(none)
         cells[i].innerHTML = newWidth[0], cells[i+width].innerHTML = newWidth[1]
        cells[i+width*2].innerHTML = newWidth[2], cells[i+width*3].innerHTML = newWidth[3]
}
}
console.log(swipeDown())

// create my function that will allow the numbers to double when they are swipped into each other but only 
//if they are the same number 

    function combineNumbers(){
        for (let i = 0; i < 15; i++ ){
            if (cells[i].innerHTML === cells[i+1].innerHTML){
                let total = parseInt(cells[i].innerHTML) + parseInt(cells[i+1].innerHTML)
                    cells[i+1].innerHTML = ''
                    cells[i].innerHTML = total
            } 
            winner()
        } 

    }

    // create a function that reads the numbers down the column and allows them to combine if they are similar but does look past the 16th column 
    function combineDown(){
        for (let i = 0; i < 12; i++ ){
            if (cells[i].innerHTML === cells[i+width].innerHTML){
            let total = parseInt(cells[i].innerHTML) + parseInt(cells[i+width].innerHTML)
            cells[i+width].innerHTML = ''
            cells[i].innerHTML = total
            }
            winner()
        }
    }



//create function that allows players to swiper using keyboard  

function control(e){
        if(e.key === 'ArrowRight'){
        keyRight()
        } else if(e. key === 'ArrowLeft'){
            keyLeft()
        } else if(e. key === 'ArrowDown'){
            keyDown()
        } else if(e.key === 'ArrowUp'){
            keyUp()
        }
    }

document.addEventListener('keyup', control)
// generating the key function to do mulitple functions once the key is let go at keyUp
    function keyRight(){
        swipeRight()
        combineNumbers()
        swipeRight()
        generateNewNumber()
    }

    function keyLeft(){
        swipeLeft()
        combineNumbers()
        swipeLeft()
        generateNewNumber()
    }   
    function keyUp(){
        swipeUp()
        combineDown()
        swipeUp()
        generateNewNumber()
    }
    
    function keyDown(){
        swipeDown()
        combineDown()
        swipeDown()
        generateNewNumber()
    }
 

