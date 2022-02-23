import { WORDS } from './words_alpha.mjs'
var SCORES = {"a": 1, "c": 3, "b": 3, "e": 1, "d": 2, "g": 2, 
          "f": 4, "i": 1, "h": 4, "k": 5, "j": 8, "m": 3, 
          "l": 1, "o": 1, "n": 1, "q": 10, "p": 3, "s": 1, 
          "r": 1, "u": 1, "t": 1, "w": 4, "v": 4, "y": 4, 
          "x": 8, "z": 10}

var allwords = []
WORDS.forEach((word) => {
    if (word.length == 5){
        allwords.push(word)
    }
})

console.log(Calculate(allwords, ['k','a','y','a','k'],["gray", "gray", "gray", "yellow", "green"],0))

export function Calculate(words, letters, data, unique){

    var includes = []
    var excludes = []
    var correct = ['','','','','']
    var incorrect = ['','','','','']

    for (var i = 0; i < 5; i++){
        if (data[i] == "yellow"){
            includes.push(letters[i])
            incorrect[i] = letters[i]
        } else if (data[i] == "gray"){
            if (!includes.includes(letters[i]) && !correct.includes(letters[i])){
                excludes.push(letters[i])
            }
            incorrect[i] = letters[i]
        } else if (data[i] == "green"){
            correct[i] = letters[i]
        }
    }

    for (var i = 0; i < 5; i++){
        if (excludes.includes(correct[i])){
            excludes.splice(excludes.indexOf(correct[i]), 1)

        }
        if (excludes.includes(incorrect[i]) && data[i] == "yellow"){
            excludes.splice(excludes.indexOf(incorrect[i]), 1)
        }
    }

    console.log("Include: " + includes + "\nExclude: " + excludes + "\nCorrect: " + correct + "\nIncorrect: " + incorrect)

    var guesses = []

    var wordlist = []
    if (words == 1){
        wordlist = allwords
    } else {
        wordlist = words
    }

    wordlist.forEach((word) => {

        var valid = true
        var charList = []

        // For every letter in the word
        for (var i = 0; i < 5; i++){

            charList.push(word[i])

            // If the letter is in the excludes list - WRONG
            if (excludes.includes(word[i])){
                valid = false
            }

            // If the ith letter doesn't match correct - WRONG
            if (correct[i] != "" && correct[i] != word[i]){
                valid = false
            }

            // If the ith letter matches one of the incorrect letters - WRONG
            if (incorrect[i] == word[i]){
                    valid = false
            }

        }

        // If it does not include every character in includes
        if (!includes.every(v => charList.includes(v))){
            valid = false
        }

        if (valid) {
            guesses.push(word)
        }
    })
    return guesses
}

          /*
function sortG(guesses) {
    pairs = {}
    for word in guesses:
        pairs.update({word : sum(SCORES[letter] for letter in word)})
    return sorted(pairs.items(), key=lambda x: x[1])
}

function uniqueLetters(guesses){
    var temp = []
    for (word in guesses){
        var letters_seen = []
        for (letter in word){
            if not(letter in letters_seen){
                letters_seen.append(letter)
                app = True
            }else {
                app = False
                break
            }
        }
        if (app) {
            temp.append(word)
        }
    }
    return temp
} */