const { readFile, writeFile } = require("fs");

readFile("./content/newFile.txt", "utf8", (err, result) => {
	if (err) {
		return;
	}
	const first = result;
	readFile("./content/subfolder/second.txt", "utf-8", (err, result) => {
		if (err) {
			console.log(err);
			return;
		}
		const second = result;
		writeFile(
			"./content/async-file.txt",
			`Async is amziing : ${first} ${second}`,
			(error, result) => {
				if (error) return;
				console.log(result);
			}
		);
	});
});
