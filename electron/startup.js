'use strict';
const electron = require('electron');
const path = require('path');

const app = electron.app;

const client = path.resolve(__dirname, "./client");

// event handlers
const eventDota2Handler = require("./event-dota2");
const eventUIHandler = require("./event-ui");

// prevent window being garbage collected
let window = null;
let dota2Server = null;

function onClosed() {
	// dereference the window
	// for multiple windows store them in an array
	window = null;

	if (!!dota2Server) {
		dota2Server.close();
	}
}

function createMainWindow() {
	const window = new electron.BrowserWindow({
		width: 512,
		height: 789,
		autoHideMenuBar: true,
		resizable: false,
		frame: false
	});

	window.loadURL(path.resolve(client, "index.html"));
	window.on('closed', onClosed);

	dota2Server = eventDota2Handler(window);
	eventUIHandler(window);

	return window;
}

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (!window) {
		window = createMainWindow();
	}
});

app.on('ready', () => {
	window = createMainWindow();
});
