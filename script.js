var finish = true;


function end() {
    finish = false;
    return finish;

}

var rockbutton = document.getElementById("rockid");
rockbutton.onclick = function() {
    userChoice = "rock";
    abc();
};
var scissorsbutton = document.getElementById("scissorsid");
scissorsbutton.onclick = function() {
    userChoice = "scissors";
    abc();
};

var paperbutton = document.getElementById("paperid");
paperbutton.onclick = function() {
    userChoice = "paper";

    abc();

};

function abc() {

    if (finish) {
        var computerChoice = Math.random();
        if (computerChoice < 0.34) {
            computerChoice = "rock";
        } else if (computerChoice <= 0.67) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        }


        var compare = function(choice1, choice2) {
            if (choice1 === choice2) {
                return "The result is a tie!";
            } else if (choice1 === "rock") {
                if (choice2 === "scissors") {
                    return "Rock Wins"
                } else {
                    return "Paper Wins"
                }
            } else if (choice1 === "paper") {
                if (choice2 === "rock") {
                    return "Paper Wins"
                } else {
                    return "scissorsssors Wins"
                }
            } else {
                if (choice2 === "rock") {
                    return "Rock Wins"
                } else {
                    return "scissorsssors Wins"
                }
            }
        };


        if (userChoice === "paper") {
            document.getElementById("paperid").className += " showclass";


        } else if (userChoice === "rock") {
            document.getElementById("rockid").className += " showclass";


        } else if (userChoice === "scissors") {
            document.getElementById("scissorsid").className += " showclass";
        }

        if (computerChoice === "paper") {
            document.getElementById("paperid").className += " showclass";

        } else if (computerChoice === "rock") {
            document.getElementById("rockid").className += " showclass";

        } else if (computerChoice === "scissors") {
            document.getElementById("scissorsid").className += " showclass";


        }
        setTimeout(function() {


            showText(compare(userChoice, computerChoice) + " " + "-- You Chose: " + userChoice + "-- Computer Chose: " + computerChoice);
            var x = document.getElementById('restart');
            x.style.visibility = 'visible';
            end();

        }, 1500);


        document.getElementById("every").className += " everymore";

        setTimeout(function() {

            document.getElementById("rockid").className += " noneclass";
            document.getElementById("paperid").className += " noneclass";
            document.getElementById("scissorsid").className += " noneclass";

        }, 1500);


    };


    function showText(text) {
        document.getElementById("result").innerText = text;




    }
}