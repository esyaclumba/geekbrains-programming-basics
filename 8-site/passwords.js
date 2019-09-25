let characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`,
    password = ``;
function generatePassword() {
    let answerField = document.getElementById(`pass_length`),
        passLength = +answerField.value,
        text = ``,
        content = document.getElementsByClassName(`content`)[0];
    password = ``;
    console.log(passLength);
    if (!isNaN(passLength) && passLength != 0) {
        text += `Пароль (${passLength} симв.)`;
        text += ` <a class="btn xs" onclick="copyToClipboard();">Скопировать в буфер обмена</a>`;
        text += `<br>`;
        for (let i = 0; i < passLength; i++) {
            password += characters.charAt( parseInt( Math.random() * characters.length ) );
        }
        text += password;
    } else {
        text += `Введите число`;
    }

    answerField.value = ``;
    answerField.focus();

    let p = document.getElementsByClassName(`password`)[0];

    if (typeof p === `undefined`) {
        p = document.createElement(`p`);
        p.className = `password`;
        p.innerHTML = text;
        content.append(p);
    } else { p.innerHTML = text }
}

function copyToClipboard() {
    navigator.clipboard.writeText(password);
}