import { Component } from "@angular/core";
import { GameStateView, GameStateViewBase } from "../view-base.component";

@Component({
	selector: 'ultimate-view',
	templateUrl: 'ultimate-view.component.html'
})
export class UltimateViewComponent extends GameStateViewBase<any> {
	ngOnInit() { }
	ngOnDestroy() { }
}

export const ViewUltimate: GameStateView = {
	id: 'VIEW_ULTIMATE',
	label: 'Ultimate status',
	icon: 'flare',
	description: 'Shows your ultimate level + cooldown.',

	columnSize: 1,
	rowSize: 1,

	viewComponent: UltimateViewComponent,
	viewSettings: [

	]
};
