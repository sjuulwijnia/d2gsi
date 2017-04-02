import { Component } from "@angular/core";
import { GameStateView, GameStateViewBase } from "../view-base.component";

@Component({
	selector: 'empty-view',
	templateUrl: 'empty-view.component.html'
})
export class EmptyViewComponent extends GameStateViewBase<any> {
	ngOnInit() { }
	ngOnDestroy() { }
}

export const ViewEmpty: GameStateView = {
	id: 'VIEW_NONE',
	label: 'Empty',
	icon: 'block',
	description: 'Shows nothing.',

	columnSize: 1,
	rowSize: 1,

	viewComponent: EmptyViewComponent,
	viewSettings: []
};
