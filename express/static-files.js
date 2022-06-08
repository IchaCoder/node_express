const express = require("express");
const app = express();

app.use(express.static("./public"));

app.all("*", (req, res) => {
	res.status(404).send("Resources cant be located sef");
});

app.listen(5000, () => {
	console.log("Server listening on port 5000...");
});
