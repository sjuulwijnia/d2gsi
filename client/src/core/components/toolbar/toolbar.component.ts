import { Component } from "@angular/core";

import { AppState, Store } from "../../../ngrx";
import { UIToggleSettingsAction, UIWindowCloseAction, UIWindowMinimizeAction } from "../../../ngrx/ui";

@Component({
	selector: 'toolbar',
	templateUrl: 'toolbar.component.html'
})
export class ToolbarComponent {
	constructor(
		private store: Store<AppState>
	) { }

	onClose() {
		this.store.dispatch(new UIWindowCloseAction);
	}

	onMinimize() {
		this.store.dispatch(new UIWindowMinimizeAction);
	}

	onChangeLayout() {

	}

	onSettings() {
		this.store.dispatch(new UIToggleSettingsAction);
	}
}
