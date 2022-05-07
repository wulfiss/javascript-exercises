const palindromes = function (text) {
    let cleanOriginalText = text.toLowerCase().match(/[a-z]/g).join('');
    let reverseText = cleanOriginalText.split('').reverse('').join('');

    return reverseText === cleanOriginalText ? true : false;
};

// Do not edit below this line
module.exports = palindromes;