/*-------------------------------- Constants --------------------------------*/
const story = [
  {
    prompt: "Lorem ipsum dolor sit amet",
    options: [
      {
        prompt: "Mauris eleifend ipsum id justo interdum cursus.",
        index: 1
      },
      {
        prompt: "Sed diam orci, pellentesque et lorem quis.",
        index: 2
      }
    ]
  },
  {
    prompt: "Lorem ipsum dolor sit amet",
    options: [
      {
        prompt: "Mauris eleifend ipsum id justo interdum cursus.",
        index: 3
      },
      {
        prompt: "Sed diam orci, pellentesque et lorem quis.",
        index: 4
      }
    ]
  },
  {
    prompt: "Lorem ipsum dolor sit amet",
    options: [
      {
        prompt: "Mauris eleifend ipsum id justo interdum cursus.",
        index: 5
      },
      {
        prompt: "Sed diam orci, pellentesque et lorem quis.",
        index: 6
      }
      
    ]
  },
  {
    prompt: "Lorem ipsum dolor sit amet",
    options: [
      {
        prompt: "Mauris eleifend ipsum id justo interdum cursus.",
        Index: 7
      },
      {
        prompt: "Sed diam orci, pellentesque et lorem quis.",
        index: 8
      }
    ]
  },
]
/*---------------------------- Variables (state) ----------------------------*/
 let currentIndex = 0
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
  const currentState = story [currentIndex]
textEl.style.display = 'block'
textEl.innerHTML = currentState.prompt

optionButtonsEl.style.display = 'block'
optionButtonsEl.innerHTML = ''
//currentState forEach? (blank, index)

}
function select(){
}
//displays options

//story text 
