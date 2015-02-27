
var GPIO = require("onoff").Gpio;

var led = new GPIO(18, "out");
var swch = new GPIO(17, "in", "both");



function light(err, state)
{
	if( state == 0 )
	{
		led.writeSync(0);
	}
	else
	{
		led.writeSync(1);
		console.log("Current Temp:" + temperature_from_resistance(read_resistance()));
	}
}

function discharge()
{
	console.log("discharge");
	var tempA = new GPIO(23, "in");
	var tempB = new GPIO(24, "out")
	tempB.writeSync(0);
	var startDate = new Date();
	var startTime = startDate.getTime();
	while( new Date().getTime() - startTime < 100 )
	{};
}

function charge_time()
{
	console.log("charge_time");
	var tempA = new GPIO(23, "out");
	var tempB = new GPIO(24, "in")
	var startDate = new Date();
	var startTime = startDate.getTime();
	tempA.write(1);
	while(tempB.readSync() != 1)
	{
		console.log("charging");
		break;
	}
	var endDate = new Date();
	var endTime = endDate.getTime();
	
	console.log("Start: " + startTime);
	console.log("End: " + endTime);
	
	return (endTime - startTime) * 1000000;
}

function analog_read()
{
	discharge();
	return charge_time();
}

function read_resistance()
{
	console.log("read resistance");
	var total = 0;
	for(var i=0; i<100; i++)
	{
		total += analog_read();
	}
	var reading = total / 100;
	return reading * 6.05 - 939;
}

function temperature_from_resistance(resistance)
{
	var B = 3800.0;
	var R0 = 1000.0;
	var t0 = 273.15;
	var t25 = t0 + 25;
	var inv_T = 1/t25 + 1/B * Math.log(resistance / R0);
	
	var T = (1/inv_T - t0) * 0.9;
	
	return T * 9.0/5.0 + 32;
}

swch.watch(light);