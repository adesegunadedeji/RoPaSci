// Create variables for what we want to keep trck of le playerChoice = null;
const player = {
    wins: 0,
    choice: null
}


const computer = {
    wins: 0,
    choice: null
}

const choices = [ "rock", "paper", "scissors"];
// choices.push("mountains");


const computerChooses = ()=> {
    const randomItem = choices[Math.floor(Math.random()*choices.length)];
    computer.choice = randomItem;
}


player.choice = "rock";
//Function to compare the user choice and computer choice
//If the computer wins: computer.wins ++;
//console.log a message with the result of who won the what the each player's choice was 
function compareChoices(){
    console.log(`The player chose ${player.choice} and the computer chose ${computer.choice}`);
    if(player.choice === computer.choice){
        console.log("TIE GAME")
    }else if(player.choice === "rock"){
        if(computer.choice === "scissors"){
            console.log("YOU WIN");
            player.wins++;
        }else{
            console.log("YOU LOSE");
            computer.wins++;
        }
    }else if(player.choice === "scissors"){
        if(computer.choice === "paper"){
            console.log("YOU WIN");
            player.wins++;
        }else{
            console.log("YOU LOSE");
            computer.wins++;
        }
    }else{
        if(computer.choice === "rock"){
            console.log("YOU WIN");
            player.wins++;
        }else{
            console.log("YOU LOSE");
            computer.wins++;
        }
    }
}
const $sectionTag = $(`<section class="scoreBoard"></section>`);
$('body').append($sectionTag);
//When the user clicks a choice button it copares their choice with the computer:
$('.choices').click(function() {
    //Player choose from choice of buttons
    player.choice = $(this).text();
    computerChooses();
    compareChoices();

    //Create a section and append it to the body
    $('.scoreBoard').text(` Player Score: ${player.wins} || Computer Score ${computer.wins} `)
});

