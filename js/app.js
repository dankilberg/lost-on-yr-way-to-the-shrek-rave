/* -------------------------------- Constants -------------------------------- */
import { story } from "./shrek.js"

/* ---------------------------- Variables (state) ---------------------------- */
let currentIndex = 0

/* ------------------------ Cached Element References ------------------------ */
const startButton = document.querySelector("#start-button")
const textEl = document.querySelector("#text")
const optionButtonsEl = document.querySelector("#option-buttons")
const title = document.querySelector("#title1")
const resetbtn = document.getElementById("reset")
const shrekSays = new Audio("../audio/thursday.mp3")
/* ----------------------------- Event Listeners ----------------------------- */
  startButton.addEventListener("click", startGame)
  optionButtonsEl.addEventListener("click", select)
  resetbtn.addEventListener("click", resetGame)


/* -------------------------------- Functions -------------------------------- */

function startGame() {
  startButton.style.display = "none"
  title.style.display = "none"
  showText()
}

function showText() {
  const currentState = story[currentIndex]
  textEl.style.display = "block"
  textEl.innerHTML = currentState.prompt

  optionButtonsEl.style.display = "block"
  optionButtonsEl.innerHTML = ""

  currentState.options.forEach((option, index) => {
    const button = document.createElement("button")
    button.classList.add("btn")
    button.textContent = option.prompt
    button.dataset.index = index
    optionButtonsEl.appendChild(button)
  })
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

function resetGame() {
  currentIndex = 0
  textEl.style.display = 'none'
  optionButtonsEl.style.display = 'none'
  title.style.display = 'block'
  startButton.style.display = 'block'
  optionButtonsEl.innerHTML = ''
}

resetbtn.addEventListener("click", function(evt) {
  shrekSays.volume = 0.05
  shrekSays.play()
})
