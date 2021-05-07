let userscore = 0;
let computerscore = 0;
let userscore_span = document.getElementById("user-score");
let computerscore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")

function getComputerChoices(){
    const choices = ['Rock','Paper','Scissors'];
    const randomnumber = (Math.floor(Math.random()*3));
    return choices[randomnumber];
}

function original(letter){
    if(letter == 'Rock'){
        return 'r';
    }
    if(letter=="Paper"){
        return 'p';
    }
     if(letter=="Scissors"){
         return's';
     }
}

function win(user,computer){
    userscore++;
    userscore_span.innerHTML = userscore;
    computerscore_span.innerHTML = computerscore;
    const smalluword = "user".fontsize(3).sub();
    const smallcword = "Comp".fontsize(3).sub();
    result_p.innerHTML =`${user}${smalluword} beats ${computer}${smallcword}. You Win `;
    document.getElementById(original(user)).classList.add('green-glow');
    setTimeout(function(){document.getElementById(original(user)).classList.remove('green-glow')},500)
}



function loose(userChoice,computerChoice){
    computerscore++;
    userscore_span.innerHTML = userscore;
    computerscore_span.innerHTML = computerscore;    result_p.innerHTML = `${computerChoice} beats ${userChoice}. You Loose `;
    const smalluword = "user".fontsize(3).sub();
    const smallcword = "Comp".fontsize(3).sub();
    result_p.innerHTML =`${computerChoice}${smallcword} beats ${userChoice}${smalluword}. You Loose `;
    document.getElementById(original(userChoice)).classList.add('red-glow');
    setTimeout(function(){document.getElementById(original(userChoice)).classList.remove('red-glow')},500)

}

function draw(){
    result_p.innerHTML = "It is a Draaw";
}

function game(userChoice){ 
   let computerChoice = getComputerChoices();
   switch(userChoice+computerChoice){
       case "PaperRock":
       case "ScissorsPaper":
       case "RockScissors":
           win(userChoice,computerChoice);
           break;
       case "RockPaper":
       case "PaperScissors":
       case "ScissorsRock":
           loose(userChoice,computerChoice); 
           break;
       case "RockRock":
       case "PaperPaper":
       case "ScissorsScissors":
           draw();
           break; 
   }
};

rock_div.addEventListener('click',function(){
    game('Rock')
});

paper_div.addEventListener('click',function(){
    game('Paper')
});

scissors_div.addEventListener('click',function(){
    game('Scissors')
});



