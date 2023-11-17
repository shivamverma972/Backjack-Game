let cards = []
let sum = 0

let hasBlackJack = false
let isAlive = false

let messageEl=document.querySelector("#message-el")
let sumEl=document.querySelector("#sum-el")
let cardsEl=document.querySelector("#cards-el")
let remainMsgEl=document.querySelector("#remain-msg-el")

function startGame(){
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards = [firstCard,secondCard]
    sum=firstCard+secondCard
    isAlive = true
    renderGame()

}

function getRandomCard(){
    let n=Math.floor(Math.random()*13)+1
    if (n===1) {
        return 11
    }
    else if (n>10) {
        return 10
    }
    else{
        return n
    }
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum:" +  " " + sum
    let mes=""
    let remainEl=""
    if(sum <= 20){
        let remainAmount=21-sum
        remainEl="You require "+remainAmount +" to get BlackJack"
        mes="Do you want to draw a new card?"
    }
    else if(sum === 21){
        mes="You've got Blackjack!"
        hasBlackJack = true
    }
    else {
        mes="You're out of the game!"
        isAlive = false
    }
    remainMsgEl.textContent=remainEl
    messageEl.textContent=mes
}

function newCard(){
    if (isAlive === true && hasBlackJack === false) {
        let card=getRandomCard()
        sum += card
        cards.push(card)
        renderGame() 
    }
}