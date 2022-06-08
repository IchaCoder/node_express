const EventEmiter = require("events");

const customEmitter = new EventEmiter();

customEmitter.on("response", () => {
	console.log("data received");
});

customEmitter.on("response", () => console.log("some other logic here"));

customEmitter.emit("response");
