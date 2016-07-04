var five = require('johnny-five');
var board = new five.Board();


board.on('ready', function () {
    var servo = new five.Servo(10);
    var accelerometer = new five.Accelerometer({
        controller: 'ADXL345'
    });

    accelerometer.on('change', function () {

        var info = `
accelerometer
    x: ${this.x}
    y: ${this.y}
    z: ${this.z}
    pitch: ${this.pitch}
    roll: ${this.roll}
`;
        console.log(info);

        var normalized = -1 * 2 * (this.pitch) + 90;
        servo.to(normalized);
    });
});
