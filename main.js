const generateBtn = document.getElementById("generate-btn")
const newBtn = document.getElementById('new-btn')

const passwordOne = document.getElementById("password-one")
const passwordTwo = document.getElementById("password-two")

const charLength = document.getElementById("char-length")
const hint = document.getElementById('hint')


const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
let newArr = []


generateBtn.addEventListener("click", renderPassword)
newBtn.addEventListener("click", newPassword)

function randomIndex() {
  return Math.floor( Math.random() * characters.length )
}

function generatePassword(inputValue) {
  let pass = ""
  for (let i = 0; i < inputValue; i++) {
    pass += characters[randomIndex()]
  }
  return pass
}

function check() {
  let inputValue = Number(charLength.value)
  if ( inputValue < 6 || inputValue > 15 ) {
    renderError()
  } else {
    return generatePassword(inputValue)
  }
}

function renderError() {
  hint.classList.remove("hide")
  charLength.focus()
  charLength.setAttribute("disabled", "")
}

function renderPassword() {
  let password1 = check()
  let password2 = check()
  passwordOne.textContent = password1
  passwordTwo.textContent = password2
  
  generateBtn.setAttribute("disabled", "")
  newBtn.removeAttribute("disabled")
}

function newPassword() {
  charLength.value = ""
  passwordOne.textContent = ""
  passwordTwo.textContent = ""
  charLength.removeAttribute("disabled")
  charLength.focus()

  if (hint.classList.contains("hide")) {
    generateBtn.removeAttribute("disabled")
    newBtn.setAttribute("disabled", "")
  } else {
    hint.classList.add("hide")
    generateBtn.removeAttribute("disabled")
    newBtn.setAttribute("disabled", "")
  }
}