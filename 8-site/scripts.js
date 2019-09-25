let menuLinks = [
    [`index.html`, `Главная`],
    [`riddles.html`, `Игра в загадки`],
    [`guess.html`, `Угадай число`],
    [`passwords.html`, `Мастер паролей`],
    [`online-shop.html`, `Вёрстка интернет-магазина`]
];
function doMenu(){
    let className = ``;
    let address = window.location.href.split(`/`);
    address = address[address.length - 1];
    for (let i = 0; i < menuLinks.length; i++) {
        if (address != menuLinks[i][0]) {
            document.write(`<a ${className} href="${menuLinks[i][0]}">${menuLinks[i][1]}</a>\n`);
        }
    }
}

//years period of site existence
function getExistingYears() {
    let existingYears = `Варя, `,
        currentYear = +(new Date().getFullYear()),
        startYear = 2019;
    if (currentYear != startYear) {
        existingYears += startYear+`–`+currentYear;
    } else { existingYears += startYear; }
    let p = document.createElement(`p`);
    p.className = `years`;
    p.innerText = existingYears;
    document.getElementsByClassName(`footer`)[0].append(p);
}