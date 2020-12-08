function validateUsername(username) {
    if (username.length < 6 || username.length > 16)
        return false;
    var regex = new RegExp("^[0-9A-Za-z]+$");
    return regex.test(username);
}
module.exports = validateUsername;
