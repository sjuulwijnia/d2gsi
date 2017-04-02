import { Directive, HostBinding, OnDestroy } from "@angular/core";

import { VIEW_CONTAINER_ITEM_WIDTH } from "../../configuration";

import { AppState, Store, Subscription, getColumnCount } from "../../ngrx";

@Directive({
	selector: '.app-container, .mat-toolbar-layout'
})
export class ContainerDirective implements OnDestroy {
	@HostBinding('style.margin') containerMargin = '0 auto';
	@HostBinding('style.width') get containerWidth() {
		return `${VIEW_CONTAINER_ITEM_WIDTH * this.columnCount}px`;
	};

	private columnCount: number = 2;
	private columnCountSubscription: Subscription = null;

	constructor(
		store: Store<AppState>
	) {
		this.columnCountSubscription = store
			.select(getColumnCount)
			.subscribe((columnCount) => {
				this.columnCount = columnCount;
			});
	}

	ngOnDestroy() {
		this.columnCountSubscription.unsubscribe();
	}
}
