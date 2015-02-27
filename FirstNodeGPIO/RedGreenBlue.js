var GPIO = require("onoff").Gpio;

var red = new GPIO(16, "out");
var green = new GPIO(20, "out");
var blue = new GPIO(21, "out");


setInterval(redOn(), 1000);
setInterval(greenOn(), 3000);
setInterval(blueOn(), 4000);


function redOn()
{
	console.log("red");
	red.writeSync(1);
	green.writeSync(0);
	blue.writeSync(0);
}

function greenOn()
{
	console.log("green");
	green.writeSync(1);
	red.writeSync(0);
	blue.writeSync(0);
}

function blueOn()
{
	console.log("blue");
	blue.writeSync(1);
	green.writeSync(0);
	red.writeSync(0);
}