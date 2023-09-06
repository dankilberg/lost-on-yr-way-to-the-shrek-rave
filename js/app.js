/*-------------------------------- Constants --------------------------------*/
const story = []
/*---------------------------- Variables (state) ----------------------------*/
 let currentIndex = {}
/*------------------------ Cached Element References ------------------------*/
const startButton = document.querySelector('#start-button')
const textEl = document.querySelector('#text')
const optionButtonsEl = document.querySelector('#option-buttons')


/*----------------------------- Event Listeners -----------------------------*/
// document.addEventListener('button')
startButton.addEventListener('click', startGame)

/*-------------------------------- Functions --------------------------------*/
function startGame(){ 
  startButton.style.display = 'none'
  showText()
  // textEl.style.display = 'block'
  // optionButtonsEl.style.display = 'block'
  // textEl.innerHTML = "Welcome to Lost on Yr Way To The Shrek Rave."
  // optionButtonsEl.innerHTML = 
  // `<button class="btn">Option 1</button>
  // <button class="btn">Option 2</button>
  // <button class="btn">Option 3</button>`
} 

function showText(){

}
//adds to story 
 
function select(){

}
//displays options

//story text 
