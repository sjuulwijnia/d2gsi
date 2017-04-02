import { Injectable, NgZone } from "@angular/core";

import { electron } from "../electron";

import { VIEWS } from "./game-state.views";
import { AppState, Store, getColumnCount, getRowCount } from "../ngrx";
import { GameStateSetAction } from "../ngrx/game-state";
import { ViewSetAction } from "../ngrx/view";

@Injectable()
export class GameStateService {
	private columnCount: number;
	private rowCount: number;

	constructor(
		ngZone: NgZone,
		private store: Store<AppState>
	) {
		store
			.select(getColumnCount)
			.subscribe(columnCount => {
				this.columnCount = columnCount;
				this.initializeGrid();
			});

		store
			.select(getRowCount)
			.subscribe(rowCount => {
				this.rowCount = rowCount;
				this.initializeGrid();
			});

		electron.ipcRenderer.on('gamestate-update', (_, ...args: any[]) => {
			ngZone.run(() => {
				store.dispatch(new GameStateSetAction(args[0]));
			});
		});

		electron.ipcRenderer.send('gamestate-reconnect');
	}

	private initializeGrid() {
		if (this.rowCount === 0 || this.columnCount === 0) {
			return;
		}

		let j = 0;
		for (let i = 0; i < (this.rowCount * this.columnCount);) {
			const view = VIEWS[j];

			this.store.dispatch(new ViewSetAction({
				index: j,
				view: view
			}));

			i += (view.columnSize * view.rowSize);
			j++;
		}
	}
}
