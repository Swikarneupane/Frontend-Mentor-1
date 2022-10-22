let quote = document.querySelector('.quote'),
    idHere = document.querySelector('.id-here')

const diceEl = document.querySelector('.dice-div')

const url = `https://api.adviceslip.com/advice`

// diceEl.addEventListener("click", generateAdvice)

// function generateAdvice()
diceEl.addEventListener("click", generateAdvice)

function generateAdvice() {
    quote.innerText = ""
    idHere.innerText = ""

    fetch(url)
    .then((response) => response.json())
    .then((item) => {
        quote.innerText = `"${item.slip.advice}"`
        idHere.innerText = `${item.slip.id}`
    })
    
}

generateAdvice();