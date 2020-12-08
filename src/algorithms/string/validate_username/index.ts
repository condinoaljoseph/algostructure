function validateUsername(username: string): boolean {
	if (username.length < 6 || username.length > 16) return false;

	const regex = new RegExp("^[0-9A-Za-z]+$");

	return regex.test(username);
}

module.exports = validateUsername;
