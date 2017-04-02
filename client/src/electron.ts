interface Electron {
	ipcRenderer: ElectronIpcRenderer;
}

interface ElectronIpcRenderer {
	addListener(channel: string, handler: ElectronIpcRendererEventListener): this;
	on(channel: string, handler: ElectronIpcRendererEventListener): this;
	once(channel: string, handler: ElectronIpcRendererEventListener): this;

	send(channel: string, ...args: any[]): void;
}

type ElectronIpcRendererEventListener = (event: ElectronIpcRendererEvent, ...args: any[]) => void;
interface ElectronIpcRendererEvent {
	sender: ElectronIpcRenderer;
}

export const electron: Electron = window['electron'];