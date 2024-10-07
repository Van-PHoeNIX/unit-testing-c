function romanIntConversion(s) {

    const romanVal = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;

    for (let i = 0; i < s.length; i++) {

        if (i < s.length - 1 && romanVal[s[i]] < romanVal[s[i + 1]]) {
            result -= romanVal[s[i]];
        } else {
            result += romanVal[s[i]];
        }
    }

    return result;
}

module.exports = romanIntConversion;