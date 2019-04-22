let cardId = document.getElementById('cardId')
let cardType = document.getElementById('cardType')

function resetCards() {
    let diamond = document.getElementById('diamond')
    let spade = document.getElementById('spade')
    let heart = document.getElementById('heart')
    let club = document.getElementById('club')
    diamond.style.color = 'grey'
    spade.style.color = 'grey'
    heart.style.color = 'grey'
    club.style.color = 'grey'
}

function setCard() {
    let card = document.getElementById(cardId.value)
    console.log(card)
    if (cardId.value === 'heart' || cardId.value === 'diamond') {
        document.getElementById(cardId.value).style.color = 'red'
    } else {
        document.getElementById(cardId.value).style.color = 'black'
    }
}