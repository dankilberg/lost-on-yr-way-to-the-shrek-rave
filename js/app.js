/*-------------------------------- Constants --------------------------------*/
const story = [
  {
    prompt: "The Shrek rave starts in an hour and even though you already kind of look like Shrek you are nowhere near being Shrek. What do you do?",
    options: [
      {
        prompt: "Index 1",
        index: 1
      },
      {
        prompt: "Index 2",
        index: 2
      }
    ]
  },
  {
    prompt: "Prompt 2",
    options: [
      {
        prompt: "Index 3",
        index: 3
      },
      {
        prompt: "Index 4",
        index: 4
      }
    ]
  },
  {
    prompt: "Prompt 3",
    options: [
      {
        prompt: "Index4",
        index: 5
      },
      {
        prompt: "Index 6",
        index: 6
      }
      
    ]
  },
  {
    prompt: "Prompt 4",
    options: [
      {
        prompt: "Index 7",
        Index: 7
      },
      {
        prompt: "Index 8",
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
const button = document.createElement('button')
const title = document.querySelector('#title1')

/*----------------------------- Event Listeners -----------------------------*/
// document.addEventListener('button')
startButton.addEventListener('click', startGame)

/*-------------------------------- Functions --------------------------------*/
function startGame(){ 
  startButton.style.display = 'none'
  title.style.display = 'none'
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

currentState.options.forEach((option, index)=>
{
  button.classList.add.apply('btn')
  button.textContent = option.prompt
  button.dataset.index = index
  optionButtonsEl.append(button)
})
////currentState forEach? (blank, index)
////button pull from index
//add method/

}
function select(){
}
//displays options

//story text 
