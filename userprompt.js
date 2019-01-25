var inquirer = require("inquirer");
var hasGun = false; 
var hasknife = false
var hasHorse = false
var hasMoney = false

function playGame() {inquirer.prompt ([
        {
            type: "input",
            message: "You got a name partner?",
            name: "name"
        },
        {
            type: "list",
            message: "We got a real problem in the Wild West maybe you should choose a weapon...",
            choices: ["KNIFE", "YOUR WIT"],
            name: "weapon"
        },

    ])

    .then(function(anwsers) {
        if (anwsers.weapon === "YOUR WIT") {
            console.log("-------------------")
            console.log("Gun shots can be heard outside. People are screaming. I chose the wrong weapon Run!")
            console.log("-------------------")
            wit1 ()
        }
        if (anwsers.weapon === "KNIFE"){
            fight ()
        }
    })
}

playGame ()

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
                console.log("-------------------")
                console.log("The barrel was NOT safe. A stray bullet shot you through the head. Dead")
                console.log("-------------------")
                playAgain ()
            }
            else {
                console.log("-------------------")
                console.log("The saloon it is.")
                console.log("-------------------")
                console.log("The saloon isn't any quieter, but they don't seem to notice the commotion outside. Must happen often. You take a look around.")
                console.log("-------------------")
                saloon ()
            }
        })
    }

    function saloon() {
        inquirer.prompt([
            {
                type: "list",
                message: "What now?",
                choices: ["I wanna play poker.", "She looks interesting."],
                name: "saloon"
            }
            ])
        .then(function(anwsers){
            if (anwsers.saloon === "I wanna play poker.") {
                console.log("-------------------")
                console.log("These look like some fun peeps")
                console.log("-------------------")
                poker()
            }
            else {
                console.log("-------------------")
                console.log("Howdy Ma'am")
                console.log("-------------------")
                lady()
            }
        })
    }

    function search (){
        console.log("Got a gun. Let's head to the saloon though.")
        console.log("-------------------")
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
                console.log("-------------------")
                console.log("You've joined the game")
                console.log("-------------------")
                pokerGame()
            }
            else {
                console.log("-------------------")
                console.log("Sam drag this man outta here. You're thrown out of the bar")
                console.log("-------------------")
                street ()
            }
        })
    }

    function lady () {
        console.log("-------------------")
        console.log("She don't look like no hooker")
        console.log("-------------------")
        inquirer.prompt([
            {
                type: "list",
                message: "What do you want?",
                choices: ["Where are you from?", "What are you doing here?"],
                name: "lady"
            }
            ])
        .then(function(anwsers){
            if (anwsers.lady === "Where are you from?"){
                console.log("-------------------")
                console.log("None of your damn business! You just got slapped")
                console.log("-------------------")
                lady ()
            }
            else {
                console.log("-------------------")
                console.log("I am looking for my father. Have you seen him?")
                console.log("-------------------")
                father()
            }

        })
    }

function playAgain(){
    inquirer.prompt([
        {
            type: "list",
            message: "Play Again?",
            choices: ["Yes!", "No"],
            name: "playAgain"
        }
        ])
    .then(function(anwsers){
        if (anwsers.playAgain === "Yes!"){
            playGame ()
        }
        else {
            console.log("-------------------")
            console.log("Goodbye")
            console.log("-------------------")
        }
    })
}

function street (){
    console.log("Back to the danger!")
    console.log("-------------------")
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
    console.log("Let's get out of here! Taking the high road")
    console.log("-------------------")
}


function father (){
    console.log("-------------------")
    inquirer.prompt([
        {
            type: "list",
            message: "Can't say I have.",
            choices: ["", ""],
            name: "ace"
        }
        ])
}

function fight (){
    console.log("Knife is sharp! But do I really want to fight these guys?")
    playGame ()
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
   console.log("You bluff. They don't trust you, but they fold. You won the pot!") 
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
    console.log("Bad hand. You fold. You get you up to leave but the man to your right grabs your arm wondering where your ante is. You flash your gun. He's not impressed. He eyes the leader of the table who pulls his gun on you")
}