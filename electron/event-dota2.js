var electron = require("electron");
var http = require("http");

function eventDota2Handler(window) {
	var lastGameState = null;

	electron.ipcMain.on('gamestate-reconnect', () => {
		if (!!lastGameState) {
			window.webContents.send('gamestate-update', lastGameState);
		}
	});

	var dota2Server = http.createServer(function (request, response) {
		if (request.headers['user-agent'] !== 'Valve/Steam HTTP Client 1.0 (570)') {
			response.statusCode = 401;
			response.end("");
			return;
		}

		const gameStateParts = [];
		request.on("data", (data) => {
			gameStateParts.push(data);
		});

		request.on("end", () => {
			try {
				lastGameState = JSON.parse(Buffer.concat(gameStateParts).toString());

				window.webContents.send('gamestate-update', lastGameState);
			} catch (e) { }
		});

		request.on("error", (error) => {
			console.error(error);
		});

		response.statusCode = 200;
		response.end("");
	});

	dota2Server.listen(4000);

	return dota2Server;
}

module.exports = eventDota2Handler;
