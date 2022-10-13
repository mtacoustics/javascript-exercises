const repeatString = function(string , times) {
    let reapeatedString = '';
    if (times < 0) {
        reapeatedString = 'ERROR';
    } while (times > 0) {
        reapeatedString += string;
        times--;
    }
    return reapeatedString;
};

// Do not edit below this line
module.exports = repeatString;
