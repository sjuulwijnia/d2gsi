import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "@angular/material";

import { CORE_COMPONENTS } from "./components";
import { CORE_DIRECTIVES } from "./directives";
import { CORE_PIPES } from "./pipes";

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		MaterialModule
	],

	declarations: [
		...CORE_COMPONENTS,
		...CORE_DIRECTIVES,
		...CORE_PIPES
	],

	exports: [
		CommonModule,
		FormsModule,
		MaterialModule,

		...CORE_COMPONENTS,
		...CORE_DIRECTIVES,
		...CORE_PIPES
	]
})
export class CoreModule { }
