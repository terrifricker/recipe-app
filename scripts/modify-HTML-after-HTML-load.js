console.log("entering modify-HTML-after-HTML-load")

let encouragementPhrases = [
    "Exciting! A new recipe",
    "Another one?  That's great.",
    "Adding a recipe, wonderful!",
    "Enter a new tantalizing recipe.",
    "I can't wait to see what you are working on now!"
]

function addEncouragementPhraseToPage() {
    console.log('entering addEncouragementPhraseToPage');
    let phrase = grabRandomPhrase(encouragementPhrases);
    addTextToDOMid(phrase, "encouragementPhrase");
}

function grabRandomPhrase(phrases) {
    console.log('entering grabRandomPhrase')
    return (phrases[randomIntegerBetweenAndIncluding(0, (phrases.length - 1))]);
}

function randomIntegerBetweenAndIncluding(lowestInteger, highestInteger) {
    console.log('entering randomIntegerBetweenAndIncluding');
    return (Math.floor(Math.random() * (highestInteger - lowestInteger + 1) ) + lowestInteger);
}

function addTextToDOMid(string, DOMidStringInQuotes) {
    console.log('entering addTextToDOMid')
    document.getElementById("encouragementPhrase").innerHTML = string;

}

addEncouragementPhraseToPage();