let btn = document.getElementById('btn');
let output = document.getElementById('output_text');
let guessCount = 1;

let number = Math.ceil(Math.random() * 10);
if (number == 0) {
    number = parseInt(number) + 1;
}
console.log(number);



btn.addEventListener('click', () => {
    let input = document.getElementById('user_input').value;

    if (input == number) {

        output.innerHTML = `
        <span style="background:green;">&#x275D; &#x265B; Hurray!! &#x265A; You've guessed the right number, Your number was ${number} &#x275E;</span>
        `

        restart()


    } else if (input < number && input != '' && input < 11 && input > 0) {
        if (guessCount == 3) {
            restart()
            output.innerHTML = `
            <span style="color:yellow;">&#x275D; Game Over!! No more Chances left &#x275E;</span>
            `
        } else {
            output.innerHTML = `
            <span style="color:yellow;">&#x275D; You guessed too low!! input bit high number &#x261D; please! &#x275E;</span>
            `
        }



    } else if (input > number && input != '' && input < 11 && input > 0) {
        if (guessCount == 3) {
            restart();
            output.innerHTML = `
            <span style="color: gold;">&#x275D; Game Over!! No more Chances left &#x275E;</span>
            `
        } else {
            output.innerHTML = `
            <span style="color: gold;">&#x275D; You guessed too high!! input bit low number &#x261F; please! &#x275E;</span>
            `
        }



    } else if (input == '') {
        if (guessCount == 3) {
            restart();
            output.innerHTML = `
            <span style="color:salmon;">&#x275D; &#x2612; Game Over!! No more Chances left &#x275E;</span>
            `
        } else {
            output.innerHTML = `
            <span style="color:salmon;">&#x275D; &#x2612; Empty!! put a number please &#x275E;</span>
            `
        }

    } else if (input > 10 || input < 1) {
        if (guessCount == 3) {
            restart();
            output.innerHTML = `
            <span style="color:red;">&#x275D; &#x2620; Game Over!! No more Chances left &#x275E;</span>
            `
        } else {
            output.innerHTML = `
            <span style="color:red;">&#x275D; &#x2620; Out of Range!! put a number between &#x278A; to &#x2793;. &#x275E;</span>
            `
        }

    }

    guessCount++;
    input = '';
})


function restart() {


    btn.disabled = true;
    btn.innerHTML = `
        <span style="color:red; background: yellow; font-weight: bolder"> Game Over </span>
        `
    resetButton = document.createElement('button');
    resetButton.className = 'btn btn-danger';
    resetButton.textContent = 'Start New Game';
    document.body.appendChild(resetButton);

    resetButton.addEventListener('click', () => {
        location.reload();
    })

}