// Считывает имя пользователя и начинает игру
function readAndStart() {
    //Считать имя
    let name = readName()
    console.log("Имя введенное: " + name)
    //Запустить игру
    setNameHeader(name)
    startGame()
}

function readName() {
    let userName = $("#name-input").val()
    if (userName.length == 0){
        alert("Введите имя")
        //Программа тормози ле стой!
        throw new Error("Имя не введено")
    }
    return userName
}

function setNameHeader(name) {
    $(".section-outer-game__question").text(name + ", угадай мое слово, называя буквы")
}

function startGame() {
    $('.section-outer-game__input').hide();
    $('.section-outer-game__main').show();
}

$("#start-button").on("click", readAndStart)
