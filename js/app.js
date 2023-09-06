/*-------------------------------- Constants --------------------------------*/
const story = [
  {
    prompt: "The Shrek rave starts in an hour and even though you already kind of look like Shrek you are nowhere near being Shrek. What do you do?",
    options: [
      {
        prompt: "Index 1",
        nextIndex: 1
      },
      {
        prompt: "Index 2",
        nextIndex: 2
      }
    ]
  },
  {
    prompt: "Prompt 2",
    options: [
      {
        prompt: "Index 3",
        nextIndex: 3
      },
      {
        prompt: "Index 4",
        nextIndex: 4
      }
    ]
  },
  {
    prompt: "Prompt 3",
    options: [
      {
        prompt: "Index4",
        nextIndex: 5
      },
      {
        prompt: "Index 6",
        nextIndex: 6
      }
      
    ]
  },
  {
    prompt: "Prompt 4",
    options: [
      {
        prompt: "Index 7",
        nextIndex: 7
      },
      {
        prompt: "Index 8",
        nextIndex: 8
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
// const classBtn = ocument.querySelector('btn')
 

/*----------------------------- Event Listeners
 -----------------------------*/
startButton.addEventListener('click', startGame)
optionButtonsEl.addEventListener.apply('click', select)

/*-------------------------------- Functions --------------------------------*/
function startGame(){ 
  startButton.style.display = 'none'
  title.style.display = 'none'
  showText()
} 

function showText() {
  const currentState = story[currentIndex];
  textEl.style.display = 'block';
  textEl.innerHTML = currentState.prompt;

  optionButtonsEl.style.display = 'block';
  optionButtonsEl.innerHTML = '';

  currentState.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.classList.add('btn');
    button.textContent = option.prompt;
    button.dataset.index = index;
    optionButtonsEl.appendChild(button);
  });
}


function select(event) {
  const indexSelect = event.target.dataset.index
  const currentScene = story[currentIndex]
  const selectOption = currentScene.options[indexSelect]
  
  if (selectOption) {
    currentIndex = selectOption.nextIndex
    showText()
  }

}
//too many names for button? go back and check everything tide to button
//event
//click?
//displays options
//story text 
