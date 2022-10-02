let player={
    name:"Shivam",
    chips:0,
    sayHello:function () {
        console.log("Hello")
    }
}

player.sayHello()

let cards = []
let sum = 0

let hasBlackJack = false
let isAlive = false

let messageEl=document.querySelector("#message-el")
let sumEl=document.querySelector("#sum-el")
let cardsEl=document.querySelector("#cards-el")

let playerEl=document.querySelector("#player-el")

playerEl.textContent = player.name + ": $" + player.chips

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
    if(sum <= 20){
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