document.addEventListener("DOMContentLoaded", function () {
        //This Function returns a random index of the choice array 
        function getComputerChoice() {
            let choices = ["rock", "paper", "scissors"];

            return choices[Math.floor(Math.random() * choices.length)];
        };

        let computer = undefined;
        let user = undefined;
        let draw = undefined;

        let roundCount = 0;

        function incrementRoundCount() {
            roundCount++;
            if ( roundCount  % 5 === 0) {
                endResults();
                resetCounters();
            }
        };
                
        let compCounter = 0;
        let userCounter = 0;
        let drawCounter = 0;

        
        const container = document.querySelector("#container");
        
        const rock = document.createElement("button");
        rock.textContent = "rock";
        
        const paper = document.createElement("button");
        paper.textContent = "paper";

        const scissors = document.createElement("button");
        scissors.textContent = "scissors";

        container.appendChild(rock);
        container.appendChild(paper);
        container.appendChild(scissors);

        rock.addEventListener('click', () => {
            return round(rock.textContent,getComputerChoice());
            
        })

        paper.addEventListener('click', () => {
            return round(paper.textContent,getComputerChoice());
        })

        scissors.addEventListener('click', () => {
            return round(scissors.textContent,getComputerChoice());
        })

        const result = document.querySelector("#result");

        let para = document.createElement("p");

        result.appendChild(para);
        
        let paraTwo = document.createElement("p");

        result.appendChild(paraTwo);
        
        const endResult = document.querySelector("#end-results");

        let paraThree = document.createElement("p");

        endResult.appendChild(paraThree);
        



        //This function evaluates the playerSelection and the computer selection and assigns to the winner a string 
        function round(playerSelection, computerSelection) {       
            if (playerSelection === "rock" && computerSelection === "paper") {
                para.textContent = "You Lose! Your choice was Rock and the computer chose Paper!";

                computer = "won";

                compCounter++;
                

            }else if (playerSelection === "rock" && computerSelection === "scissors") {
                para.textContent ="You Won! Your choice was Rock and the computer chose Scissors!";

                user = "won";
                userCounter++;

            }else if (playerSelection === "rock" && computerSelection === "rock") {
                para.textContent = "It's a Draw! Your choice was Rock and the computer chose Rock!";

                draw = "draw";

                drawCounter++;

            }else if (playerSelection === "paper" && computerSelection === "paper") {
                para.textContent = "It's a Draw! Your choice was Paper and the computer chose Paper!";

                draw = "draw";

                drawCounter++;


            }else if (playerSelection === "paper" && computerSelection === "scissors") {
                para.textContent = "You Lose! Your choice was Paper and the computer chose Scissors!";

                computer = "won";

                compCounter++;


            }else if (playerSelection === "paper" && computerSelection === "rock") {
                para.textContent = "You Won! Your choice was Paper and the computer chose Rock!";

                user = "won";
                userCounter++;

            }else if (playerSelection === "scissors" && computerSelection === "paper") {
                para.textContent = "You Won! Your choice was Scissors and the computer chose Paper!";

                user = "won";

                userCounter++;

            }else if (playerSelection === "scissors" && computerSelection === "scissors") {
                para.textContent ="It's a Draw! Your choice was Scissors and the computer chose Scissors!";

                draw = "draw";

                drawCounter++;

            }else if (playerSelection === "scissors" && computerSelection === "rock") {
                para.textContent = "You Lose! Your choice was Rock and the computer chose Scissors!";

                computer = "won";

                compCounter++;

            };
            paraTwo.textContent = "Computer: " + compCounter + ", User: " + userCounter + ", Draws: " + drawCounter + ".";
            incrementRoundCount();
        };

        function endResults () {
            if (compCounter > userCounter) {
                paraThree.textContent = "the computer Won";
            } else if(compCounter < userCounter) {
                paraThree.textContent = "You Won!!!!!! Yeeeeeeeeee!!";
            } else if(compCounter = userCounter) {
                paraThree.textContent = "It's a draw!";
            };
        }

        const resetCounters = () => {
            compCounter = 0;
            userCounter = 0;
            drawCounter = 0;
        }

    });
        

        