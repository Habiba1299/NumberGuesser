let start = document.querySelector(".start_btn");
let restart = document.querySelector(".restart_btn");
let game_over = document.querySelector(".over_btn");
let output = document.querySelector(".output")

start.addEventListener("click",start_game);
restart.addEventListener("click",restart_game);
game_over.addEventListener("click",game_over_game);

function start_game(e){
    start.style.display = "none";
    let low = 1, high = 10
    let correct_ans = Math.floor(Math.random() * high) + 1;
    console.log(correct_ans)
    console.log(typeof(correct_ans))


    let count = 3
    while(count > 0){
        
        let guess = parseInt(prompt(`You have ${count} chances left !!
        Please input a number between ${low} to ${high}.`))
        
        
       if(isNaN(guess)){
        alert(`Only number is allowed.
        Please input a number between ${low} to ${high}.`)
       }else if(guess < low || guess > high){
            alert(`Your guess is out of bound.
            Please input a number between ${low} to ${high}.`)
        }else if( guess == correct_ans){
            alert(`!!!--- You Win ----!!!`);
            break;
        }else if(correct_ans < guess){
            alert(` Correct answer is smaller! `);
        }else if(correct_ans > guess){
            alert(` Correct answer is greater!  `);
        }
        count -= 1;
        
    }

    if(count == 0){
        alert(`Already guessed 3 times.
        !!!--- You Lose ---!!!`);
        output.innerHTML= `
        <h1 >Ooopps !!! You have lost the game. </h1?`
        restart.style.display = "inline-block";
        game_over.style.display = "inline-block";
    }
    else{
        output.innerHTML= `
        <h1 >You have Won the game !!!!</h1?`
        restart.style.display = "inline-block";
        game_over.style.display = "inline-block";

    }


}

function restart_game(){

    location.reload()

}

function game_over_game(){

    restart.style.display = "none";
    game_over.style.display = "none";

    output.innerHTML= `
    <h1 >Hope, You have enjoyed the game.</h1?`

}