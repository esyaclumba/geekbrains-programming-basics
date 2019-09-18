let menuLinks = [
    [`index.html`, `Главная`],
    [`riddles.html`, `Игра в загадки`],
    [`guess.html`, `Угадай число`]
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