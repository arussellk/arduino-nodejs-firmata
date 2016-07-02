var five = require('johnny-five');
var board = new five.Board();


board.on('ready', function () {
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
            acceleration: ${this.acceleration}
            inclination: ${this.inclination}
            orientation: ${this.orientation}
        --------------------------------------
        `;
        console.log(info);
    });
});
