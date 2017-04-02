var electron = require("electron");

function eventUIHandler(window) {
	electron.ipcMain.on('ui-size', (sender, ...args) => {
		let width = args[0];
		let height = args[1];

		window.setSize(width, height, false);
	});

	electron.ipcMain.on('ui-minimize', () => {
		window.minimize();
	});

	electron.ipcMain.on('ui-close', () => {
		electron.app.quit();
	});
}

module.exports = eventUIHandler;
