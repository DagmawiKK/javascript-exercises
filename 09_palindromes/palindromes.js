const palindromes = function (string) {
    string = string
                    .split("")
                    .filter(char => /^[a-zA-Z0-9]$/.test(char))
                    .map(char => char.toLowerCase());
    return string.join("") == string.reverse().join(""); 
};

// Do not edit below this line
module.exports = palindromes;
