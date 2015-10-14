function countWords(inputWords) {
    return inputWords.reduce(function(initial, current) {
        initial[current] = ++initial[current] || 1 
        return initial
    }, {})
}

module.exports = countWords
