var inquirer = require("inquirer");
var hasGun = false; 
var hasknife = false
var hasHorse = false
var hasMoney = false

playGame()

///initial game play function and name entry
function playGame() {
    inquirer.prompt ([
        {
            type: "input",
            message: "You got a name partner?",
            name: "name"
        }

    ])
    .then(function() {
        firstChoice()
    })
}


//first choice function -- where the replay lists back to. 
function firstChoice() {
    inquirer.prompt([
    {
            type: "list",
            message: "We got a real problem in the Wild West maybe you should choose a weapon...",
            choices: ["KNIFE", "YOUR WIT"],
            name: "weapon"
    }
    ])
    
    .then(function(anwsers) {
        if (anwsers.weapon === "YOUR WIT") {
            console.log("-------------------\n")
            console.log("Gun shots can be heard outside. People are screaming. I chose the wrong weapon Run!\n")
            console.log("-------------------\n")
            wit1 ()
        }
        if (anwsers.weapon === "KNIFE"){
            fight()
        }
    })
}

    function wit1() {
        inquirer.prompt([
        {
            type: "list",
            message: "Where are we running to!?",
            choices: ["Saloon. I could use a drink.", "That barrel looks safe"],
            name: "wit1"
        }
        ])
        
        .then(function(anwsers){
            if (anwsers.wit1 === "That barrel looks safe") {
                console.log("-------------------\n")
                console.log("The barrel was NOT safe. A stray bullet shot you through the head. Dead\n")
                console.log("-------------------\n")
                playAgain ()
            }
            else {
                saloon ()
            }
        })
    }

    function saloon() {
        inquirer.prompt([
            {
                type: "list",
                message: "The saloon it is.\n The saloon isn't any quieter, but they don't seem to notice the commotion outside. Must happen often. You take a look around.\n What now?\n",
                choices: ["I wanna play poker.", "She looks interesting."],
                name: "saloon"
            }
            ])
        .then(function(anwsers){
            if (anwsers.saloon === "I wanna play poker.") {
                console.log("-------------------\n")
                console.log("These look like some fun peeps.\n")
                console.log("-------------------\n")
                poker()
            }
            else {
                console.log("-------------------\n")
                console.log("Howdy Ma'am.\n")
                console.log("-------------------\n")
                lady()
            }
        })
    }

    function search (){
        console.log("Got a gun. Let's head to the saloon though.\n")
        console.log("-------------------\n")
        hasGun = true;
        saloon();
    }

    function poker (){
        inquirer.prompt([
            {
                type: "list",
                message: "You fellas looking for another player?",
                choices: ["But you're broke", "Mind if you pay my ante?"],
                name: "poker"
            }
            ])
        .then(function(anwsers){
            if (anwsers.poker === "But you're broke" && hasGun === true) {
                console.log("-------------------\n")
                console.log("They eye your gun. You've joined the game.\n")
                console.log("-------------------\n")
                pokerGame()
            }

            if (anwsers.poker === "Mind if you pay my ante?" && hasGun === true){
                console.log("-------------------\n")
                console.log("They eye your gun. You've joined the game.\n")
                console.log("-------------------\n")
                pokerGame()
            }
            else {
                console.log("-------------------\n")
                console.log("Sam drag this man outta here. You're thrown out of the bar.\n")
                console.log("-------------------\n")
                street ()
            }
        })
    }

    function lady () {
        inquirer.prompt([
            {
                type: "list",
                message: 'She asks: "What do you want?"',
                choices: ["Where are you from?", "What are you doing here?"],
                name: "lady"
            }
            ])
        .then(function(anwsers){
            if (anwsers.lady === "Where are you from?"){
                console.log("-------------------\n")
                console.log("None of your damn business! You just got slapped.\n")
                console.log("-------------------\n")
                lady ()
            }
            else {
                console.log("-------------------\n")
                console.log("I am looking for my father. Have you seen him?\n")
                console.log("-------------------\n")
                father()
            }

        })
    }

function playAgain(){
    inquirer.prompt([
        {
            type: "list",
            message: "Play Again?",
            choices: ["Yes!", "No."],
            name: "playAgain"
        }
        ])
    .then(function(anwsers){
        if (anwsers.playAgain === "Yes!"){
            firstChoice()
        }
        else {
            console.log("-------------------\n")
            console.log("Goodbye.\n")
            console.log("-------------------\n")
        }
    })
}

function street (){
    console.log("-------------------\n")
    console.log("Back to the danger!\n")
    console.log("-------------------\n")
    inquirer.prompt([
        {
            type: "list",
            message: "A bullet wizzes past you. This really isn't any better. You see a dead man. Check his body or no?",
            choices: ["Let's find a gun!", "Take that horse!"],
            name: "outside"
        }
        ])
    .then(function(anwsers){
        if (anwsers.outside === "Let's find a gun!") {
            search ()
        }
        else {
            horse ()
        }
    })

}

function horse (){
    console.log("Let's get out of here! Taking the high road.\n")
    console.log("-------------------\n")
}


function father (){
    console.log("-------------------\n")
    inquirer.prompt([
        {
            type: "list",
            message: "He came through here looking for gold.",
            choices: ["Gold? Where?", "Lady, ain't no gold around here."],
            name: "ace"
        }
        ])
        .then(function(anwsers){
            if(anwsers.ace === "Gold? Tell me more about this gold!") {
                console.log("-------------------\n")
                console.log("Well, I'm not sure where. (She doesn't look like she trusts you.)\n")
                console.log("-------------------\n")
                father()

            }
            else {
                console.log("-------------------\n")
                console.log("Yes, there is! I can show you!\n")
                console.log("-------------------\n")
                showMeGold()
            }
             
        })
}

function fight (){
    console.log("-------------------\n")
    console.log("Knife is sharp! But do I really want to fight these guys?\n")
    console.log("-------------------\n")
    console.log("Game has not gotten this far yet.\n")
    console.log("-------------------\n")
    playAgain()
}

function pokerGame() {
    inquirer.prompt([
        {
            type: "list",
            message: "They deal. Your hand is ace of spades and a queen of hearts. The other cards are lain on the table. Only thing you have is a high ace. What now?",
            choices: ["Bluff.", "Fold."],
            name: "ace"
        }
        ])
    .then(function(anwsers){
        if (anwsers.ace === "Bluff."){
            bluff ()
        }
        else {
            fold ()
        }
    })
}

function bluff (){
   console.log("You bluff. They don't trust you, but they fold. You won the pot!\n") 
   hasMoney = true
   inquirer.prompt([
    {
        type: "list",
        message: "Now what?",
        choices: ["She looks interesting."],
        name: "only"
    }
    ])
    lady ()
}

function fold(){
    console.log("Bad hand. You fold. You get you up to leave but the man to your right grabs your arm wondering where your ante is. You flash your gun. He's not impressed. He eyes the leader of the table who pulls his gun on you.\n")
}

function replay() {

}
