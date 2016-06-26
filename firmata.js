var five = require('johnny-five');

var board = new five.Board();

var led;

board.on('ready', function () {
    var pin = 13;
    led = new five.Led(pin);

    var delayMs = 5 * 1000;

    setInterval(function () {
        led.on();

        setTimeout(function () {
            led.off();
        }, delayMs/2);
    }, delayMs);
});
