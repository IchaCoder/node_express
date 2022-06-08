const { readFile, writeFile } = require("fs");
const util = require("util");

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

// const getText = (path) => {
// 	return new Promise((resolve, reject) => {
// 		readFile(path, "utf8", (err, data) => {
// 			if (err) {
// 				reject(err);
// 			} else {
// 				resolve(data);
// 			}
// 		});
// 	});
// };

// getText("./content/subfolder/second.txt")
// 	.then((result) => console.log(result))
// 	.catch((err) => console.log(err));

const start = async () => {
	try {
		const first = await readFilePromise(
			"./content/subfolder/first.txt",
			"utf-8"
		);
		const second = await readFilePromise("./content/async-file.txt", "utf-8");
		await writeFilePromise(
			"./content/subfolder/mind-grenade.txt",
			"Hahaa made a mistake there",
			{ flag: "a" }
		);
		console.log(first, second);
	} catch (error) {
		console.log(error);
	}
};

start();
