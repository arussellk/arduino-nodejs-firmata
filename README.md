There are two examples in this repo.

1. A simple LED on/off loop using node.js and the firmata protocol
2. A node.js socket server to listen for data from a device with a gyroscope

## Linking a node.js server to an arduino through the firmata protocol
---

Quickstart

1. Get firmata protocol on your board (see instructions below)
2. Clone or download this repo
3. Install node.js
 - https://nodejs.org
 - either LTS or Current version will work
4. Run from a shell prompt:
```
$ cd /path/to/this/repo
$ npm install
$ node firmata.js
```

Getting firmata protocol on your board:

1. Open Arudino IDE
2. Click on `File > Examples > Firmata > StandardFirmata` to open the file
3. Upload the file to your board

## deviceorientation example
---

Quickstart

1. Clone or download this repo
2. Install node.js
3. Run from a shell prompt:
```
$ cd /path/to/this/repo
$ npm install
$ node server.js
```
4. Open web browser on laptop to http://localhost:8000/model.html
5. Open another tab on laptop to http://localhost:8080/source.html
6. Have both tabs visible at once (If the source tab is not visible to the user, the browser halts the socket connection.)
7. Tilt the laptop to see the model move

Chrome no longer supports deviceorientation on unsecure (http) urls.
Therefore, you cannot simply use a phone to connect to the socket/express server to be the source.
