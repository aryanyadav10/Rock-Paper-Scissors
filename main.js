const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreBoard = {
    player: 0,
    computer: 0
}

//play game
function play (e) {
    restart.style.display = 'inline-block';
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice,computerChoice);
    showWinner(winner,computerChoice);
}

//get Computer Choice
function getComputerChoice() {
    const rand = Math.random();
    if(rand < 0.34){
        return 'rock';
    }
    else if(rand <= 0.67) {
        return 'paper';
    }
    else{
        return 'scissors';
    }
}

//get Winner
function getWinner(p,c) {
    if(p === c) {
        return 'draw';
    }
    else if(p === 'rock'){
        if(c === 'paper'){
            return 'computer';
        }
        else{
            return 'player';
        }
    }
    else if(p === 'paper') {
        if(c === 'scissors'){
            return 'computer';
        }
        else{
            return 'player';
        }
    }
    else if(p === 'scissors') {
        if(c === 'rock'){
            return 'computer';
        }
        else {
            return 'player';
        }
    }
}

function showWinner (winner , computerChoice) {
    if(winner === 'player'){
        //Inc player score
        scoreBoard.player++;
        result.innerHTML = `<h1 class="text-win">You Win</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer chose <strong>${computerChoice}</strong></p>`;
    }
    else if(winner === 'computer'){
        scoreBoard.computer++;
        result.innerHTML = `<h1 class="text-lose">You Lose</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer chose <strong>${computerChoice}</strong></p>`;
    }
    else{
        result.innerHTML = `<h1>Draw</h1><i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer chose <strong>${computerChoice}</strong></p>`;
    }
    score.innerHTML = `
    <p>Player: ${scoreBoard.player}</p>
    <p>Computer: ${scoreBoard.computer}</p>
    `;
    modal.style.display = 'block';
}

//clearModal
function clearModal(e) {
    if(e.target === modal){
        modal.style.display = 'none';
    }
}

//restart
function restartGame() {
    scoreBoard.player = 0;
    scoreBoard.computer = 0;
    score.innerHTML = `
    <p>Player: 0</p>
    <p>Computer: 0</p>
    `;
}

//Event Listeners
choices.forEach(choice => choice.addEventListener('click',play));
window.addEventListener('click',clearModal);
restart.addEventListener('click',restartGame);