var h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
var word = 'abc';


function designerPdfViewer(h, word) {
    var highest = 0;
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');

    for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        var letterIndex = alphabet.indexOf(letter);
        if (h[letterIndex] > highest) {
            highest = h[letterIndex]
        }
    }
    return highest * word.length;
}

designerPdfViewer(h, word);