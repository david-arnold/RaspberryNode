var GPIO = require("onoff").Gpio;

var red = new GPIO(16, "out");
var green = new GPIO(20, "out");
var blue = new GPIO(21, "out");


red.writeSync(0);
green.writeSync(0);
blue.writeSync(0);

if( process.argv[2] == "red" ) {
	red.writeSync(1);
} else if( process.argv[2] == "green" ) {
	green.writeSync(1);
} else if( process.argv[2] == "blue" ) {
	blue.writeSync(1);
} else if( process.argv[2] == "yellow" ) {
	red.writeSync(1);
	green.writeSync(1);
} else if( process.argv[2] == "magenta" ) {
	red.writeSync(1);
	blue.writeSync(1);
} else if( process.argv[2] == "cyan" ) {
	green.writeSync(1);
	blue.writeSync(1);
} else if( process.argv[2] == "white" ) {
	red.writeSync(1);
	green.writeSync(1);
	blue.writeSync(1);
} else if( process.argv[2] == "off" ) {
	
}