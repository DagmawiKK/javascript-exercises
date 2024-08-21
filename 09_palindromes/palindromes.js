const palindromes = function (string) {
    string = string
                    .toLowerCase()
                    .split("")
                    .filter(char => /^[a-zA-Z0-9]$/.test(char))
    return string.join("") == string.reverse().join(""); 
};

// Do not edit below this line
module.exports = palindromes;
