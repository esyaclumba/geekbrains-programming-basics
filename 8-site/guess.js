let triesNum = 0; //попытки
let triesMax = 10; //максимальное кол-во попыток
let number = parseInt( Math.random() * 100 ); //загаданное число

function getAnswer() {
    return +document.getElementById(`guess_answer`).value;
}

function playAgainBtn() {
    document.getElementById(`guess_content`).innerHTML = ``;

    let playAgainButton = document.createElement(`button`);
    playAgainButton.setAttribute(`onclick`, `buildGuessContent()`);
    playAgainButton.innerHTML = `Сыграть снова`;

    document.getElementById(`guess_content`).append(playAgainButton);
}

function checkAnswer() {
    let userAnswer = getAnswer();

    if ( userAnswer == number ) {
        triesNum++;
        document.getElementsByTagName(`h1`)[0].innerHTML = `Поздравляю, вы угадали с&nbsp;${triesNum}&nbsp;попытки!`;
        playAgainBtn();
    } else {
        if (triesNum == triesMax) {
            document.getElementsByTagName(`h1`)[0].innerHTML = `Увы, вы проиграли...`;
            document.getElementById(`guess_content`).innerHTML = ``;
            playAgainBtn();
        } else {
            triesNum++;
            document.getElementById(`guess_answer`).value = ``;
            document.getElementById(`guess_answer`).focus();
            if (number > userAnswer) {
                document.getElementsByTagName(`h1`)[0].innerHTML = `Попытка ${triesNum}: число больше&nbsp;${userAnswer}, давайте снова`;
            } else {
                document.getElementsByTagName(`h1`)[0].innerHTML = `Попытка ${triesNum}: число меньше&nbsp;${userAnswer}, попробуйте еще`;
            }
        }
    }
}

function buildGuessContent() {
    number = parseInt( Math.random() * 100 );
    triesNum = 0;

    document.getElementsByTagName(`h1`)[0].innerHTML = `Угадайте число от 1 до 100 за&nbsp;10&nbsp;попыток`;
    document.getElementById(`guess_content`).innerHTML = ``;

    let input = document.createElement(`input`);
    input.type = `text`;
    input.id = `guess_answer`;

    let button = document.createElement(`button`);
    button.setAttribute(`onclick`, `checkAnswer()`);
    button.innerHTML = `Проверить догадку`;

    document.getElementById(`guess_content`).append(input, button);
}