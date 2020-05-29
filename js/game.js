const words = ["корова", "молоко", "динозавр"]
var wordInfo = {
    "word": [],
    "guessIndexes": []
}

// *о*о*а
// {   var userWord = "*о"
//     "word": ["к", "о", "р", "о", "в", "а"],
//     "guessIndexes": [1, 3, 5]
// }

// Считывает имя пользователя и начинает игру
function readAndStart() {
    //Считать имя
    let name = readName()
    console.log("Имя введенное: " + name)
    //Запустить игру
    setNameHeader(name)
    startGame()
}

// Возврат имени пользователя из поля
function readName() {
    let userName = $("#name-input").val()
    if (userName.length == 0){
        alert("Введите имя")
        //Программа тормози ле стой!
        throw new Error("Имя не введено")
    }
    return userName
}

// Добавление в заголовок имени польщзователя
function setNameHeader(name) {
    $(".section-outer-game__question p").text(name + ", угадай мое слово, называя буквы")
}

// 
function startGame() {
    $('.section-outer-game__input').fadeOut(2000, function(){
        $('.section-outer-game-main').fadeIn(2000);
    })
   
    let word = getRandomWord()
    let letterArray = word.split("")
    wordInfo.word = letterArray
    showWord()
}

// Выводит * или буквы в зависимости от угаданных пользователем букв
function showWord() {
    let userWord = ""
    for (let i = 0; i < wordInfo.word.length; i++) {
        if (wordInfo.guessIndexes.includes(i)){
            userWord += wordInfo.word[i]
        } else {
            userWord += "*"
        }
    }
    $("#word").text(userWord)
    console.log("Сгенерированное слово: " + wordInfo.word)
}

// Выбирает рандомное слово
function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}








$("#start-button").on("click", readAndStart)
