import { Component, OnDestroy } from "@angular/core";

import { electron } from "../../electron";
import { VIEW_CONTAINER_ITEM_HEIGHT, VIEW_CONTAINER_ITEM_WIDTH } from "../../configuration";

import { AppState, Store, Subscription, getViews, getColumnCount, getRowCount } from "../../ngrx";
import { GameStateView } from "../../ngrx/view/models";

import { GameStateService } from "../game-state.service";

@Component({
	selector: 'game-state-view-container',
	templateUrl: 'game-state-view-container.component.html'
})
export class GameStateViewContainerComponent implements OnDestroy {
	public columnCount: number = 0;
	private columnCountSubscription: Subscription = null;

	public rowHeight: string = `${VIEW_CONTAINER_ITEM_HEIGHT}px`;
	public rowCount: number = 0;
	private rowCountSubscription: Subscription = null;

	public views: GameStateView[] = [];
	private viewsSubscription: Subscription = null;

	public get isGameInProgress(): boolean {
		return true;
	}

	constructor(
		store: Store<AppState>,

		public gameDataService: GameStateService
	) {
		this.columnCountSubscription = store
			.select(getColumnCount)
			.subscribe(columnCount => {
				this.columnCount = columnCount;
				this.updateViewSize();
			});

		this.rowCountSubscription = store
			.select(getRowCount)
			.subscribe(rowCount => {
				this.rowCount = rowCount;
				this.updateViewSize();
			});

		this.viewsSubscription = store
			.select(getViews)
			.subscribe(views => {
				this.views = views;
			});
	}

	ngOnDestroy() {
		this.columnCountSubscription.unsubscribe();
		this.rowCountSubscription.unsubscribe();
		this.viewsSubscription.unsubscribe();
	}

	private updateViewSize() {
		if (this.columnCount === 0 || this.rowCount === 0) {
			return;
		}

		let width = this.columnCount * (VIEW_CONTAINER_ITEM_WIDTH + 8);
		width += 16; // padding around the content

		let height = this.rowCount * VIEW_CONTAINER_ITEM_HEIGHT;
		height += (this.rowCount - 1); // spacing between grid tiles
		height += 56; // md-toolbar height
		height += 10; // container padding

		electron.ipcRenderer.send('ui-size', width, height);
	}
}
