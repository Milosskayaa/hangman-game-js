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

// Добавление в заголовок имени пользователя
function setNameHeader(name) {
    $(".section-outer-game__question p").text(name + ", угадай мое слово, называя буквы")
}

// 
function startGame() {
    $(".section-outer-game__button").fadeOut(1000, function(){
        $(".section-outer-game__button-guess").fadeIn(1000)
    })
    $('.section-outer-game__input').fadeOut(1000, function(){
        $('.section-outer-game-main').fadeIn(1000)
        $("#letter-input").focus()
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

// Сделать ход
function makeGuess(){
    let userInput = $("#letter-input").val()
    $("#letter-input").val("")
    if (userInput.length == 0) {
        alert("Строка пустая, введите букву или слово")
        return
    }
    if (userInput.length == 1) {
        let indexes = getAllIndexes(wordInfo.word, userInput)
        if (indexes.length == 0) {
            alert("Такой буквы нет в слове")
        } else {
            wordInfo.guessIndexes = wordInfo.guessIndexes.concat(indexes)
        }
    } else {

    }
    showWord()
    $("#letter-input").focus()
    if(isGameDone()){
        setTimeout(function() { alert("Урааа! Вы угадали слово!") }, 1);
    }
}

// Возврат индексов переданной буквы в загаданном слове
// Возвращает массив индексов буквы или возвращает пустой массив в случае, если такой буквы нет
function getAllIndexes(arr, val) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
}

function isGameDone(){
    for (let i = 0; i < wordInfo.word.length; i++) {
        //Если такой индекс еще не угадан, вернем false(игра еще идет)
        if(wordInfo.guessIndexes.indexOf(i) == -1){
            return false
        }
    }
    return true
}




$("#start-button").on("click", readAndStart)
$("#guess-button").on("click", makeGuess)

$("#name-input").focus()