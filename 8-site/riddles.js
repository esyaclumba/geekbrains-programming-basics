let answers = [
    [`лампа`,`лампочка`, `kfvgf`, `kfvgjxrf`],
    [42,`сорок два`, `42`],
    [`человек`, `люди`, `человечество`, `human`, `xtkjdtr`]
];

function checkAnswers() {
    let correctAnswersNum = 0;
    let guessed = false;
    let message = ``;
    for (let i = 0; i < answers.length; i++) {
        let userAnswer = document.getElementById("riddle" + (i + 1) ).value.toLowerCase();
        for (let j = 0; j < answers[i].length; j++) {
            if (answers[i][j] == userAnswer) { guessed = true; }
        }
        if (guessed) {
            correctAnswersNum++;
            guessed = false;
        }
    }

    if (correctAnswersNum > 0) {
        if (correctAnswersNum == answers.length) {
            message = `Вы разгадали все загадки, поздравляю!`;
            document.getElementsByTagName(`h1`)[0].innerHTML = message;
            document.getElementById(`form`).remove();
        } else {
            message = `${correctAnswersNum} из 3 загадок разгаданы. Попробуйте разгадать все.`
            document.getElementById(`result`).innerText = message;
        }
    } else {
        message = `Увы, ни одного правильного ответа. Попробуйте еще раз.`;
        document.getElementById(`result`).innerText = message;
    }
}