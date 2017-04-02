import { Component, Input, ViewChild, ViewContainerRef } from "@angular/core";
import { ComponentRef, ComponentFactoryResolver, HostBinding } from "@angular/core";

import { VIEW_CONTAINER_ITEM_HEIGHT, VIEW_CONTAINER_ITEM_WIDTH } from "../../configuration";

import { GameStateView, GameStateViewBase } from "../game-state-views/view-base.component";

@Component({
	selector: 'game-state-view-container-item',
	templateUrl: 'game-state-view-container-item.component.html',
	styleUrls: ['game-state-view-container-item.component.scss']
})
export class GameStateViewContainerItemComponent {
	@ViewChild("viewContainerItem", { read: ViewContainerRef }) private viewContainerItemRef: ViewContainerRef;
	private viewContainerItemComponentRef: ComponentRef<GameStateViewBase<any>> = null;

	public configuration: GameStateView = null;
	@Input("configuration") public set configurationSetter(value: GameStateView) {
		this.configuration = value;
		this.updateView();
	};

	@HostBinding("style.height") get height() {
		return `${this.configuration.rowSize * VIEW_CONTAINER_ITEM_HEIGHT}px`;
	}
	@HostBinding("style.width") get width() {
		return `${(this.configuration.columnSize * VIEW_CONTAINER_ITEM_WIDTH) + ((this.configuration.columnSize - 1) * 8)}px`;
	}

	public get isHidden(): boolean {
		return this.configuration.id === 'VIEW_NONE';
	}

	public get hasContent(): boolean {
		if (!this.viewContainerItemComponentRef) {
			return false;
		}

		return !!this.viewContainerItemComponentRef.instance.hasGameState;
	}

	constructor(
		private componentFactoryResolver: ComponentFactoryResolver
	) { }

	private updateView() {
		if (this.isHidden) {
			return;
		}

		if (!!this.viewContainerItemComponentRef) {
			this.viewContainerItemComponentRef.destroy();
			this.viewContainerItemRef.clear();
		}

		this.viewContainerItemComponentRef = this.getComponentReference();

		this.viewContainerItemComponentRef.instance.configuration = this.configuration;
		this.viewContainerItemRef.insert(this.viewContainerItemComponentRef.hostView);
	}

	private getComponentReference(): ComponentRef<GameStateViewBase<any>> {
		if (!this.configuration || !this.configuration.viewComponent) {
			return null;
		}

		return this.componentFactoryResolver
			.resolveComponentFactory(this.configuration.viewComponent)
			.create(this.viewContainerItemRef.parentInjector) as any;
	}
}
