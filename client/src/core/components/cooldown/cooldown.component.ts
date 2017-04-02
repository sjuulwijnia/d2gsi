import { AfterContentChecked, Component, ElementRef, Input, ViewChild } from "@angular/core";

@Component({
	selector: 'cooldown',
	templateUrl: 'cooldown.component.html'
})
export class CooldownComponent implements AfterContentChecked {
	@ViewChild('container') containerRef: ElementRef;

	public cooldownCurrent: number = 0;
	public cooldownTotal: number = null;

	@Input('cooldown') set cooldown(value: number) {
		this.cooldownCurrent = value;
		if (this.cooldownTotal === null) {
			this.cooldownTotal = value;
		}
	}

	public get cooldownOffset(): number {
		if (!this.containerHeight) {
			return 0;
		}

		return (1 - (this.cooldownCurrent / this.cooldownTotal)) * this.containerHeight;
	}

	private containerHeight: number = 0;

	constructor() { }

	ngAfterContentChecked() {
		this.containerHeight = this.containerRef.nativeElement.offsetHeight;
	}
}