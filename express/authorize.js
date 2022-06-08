const authorize = (req, res, next) => {
	console.log("authorize");
	res.send("Authorized");
};

module.exports = authorize;
