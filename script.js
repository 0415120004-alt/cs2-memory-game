console.log("Script started");

let guess = 0; 
let firstCard = "";

// Flips card revealing text

function flipCard(cardId){
    //preint click to console to make sure its working
    console.log("card flipped");
    //get the card by its id and store it
    let card = document.getElementById(cardId);
    //chages the color to reveal the text of the card
    card.style.color = "white";
    card.style.backgroundColor = "red";

   if (firstCardId == "") {
    //store the first card id
    firstCardId = cardId;
    console.log(firstCardId)
    }
    else {
        //store second card id 
        secondCardId = cardId;
    }
    //check for a 
    checkForMatch();
}    

function checkForMatch(){
    let card1 = document.getElementById(firstCardId);
    let card2 = document.getElementById(secondCardId);

    if (card1.innerText == card2.innerText);
        console.log("match");
}