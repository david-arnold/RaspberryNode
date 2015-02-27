
var GPIO = require("onoff").Gpio;

var led = new GPIO(18, "out");
var swch = new GPIO(17, "in", "both");

function light(err, state)
{
	if( state == 0 )
		led.writeSync(0);
	else
		led.writeSync(1);
}

swch.watch(light);