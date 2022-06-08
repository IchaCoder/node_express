const http = require("http");

const server = http.createServer((req, res) => {
	if (req.url === "/about") {
		res.end("<h1>Hello world</h1>");
	}
	res.end("<p>Hello world</p>");
});

server.listen(5000);
