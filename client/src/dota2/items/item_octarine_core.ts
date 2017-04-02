import { Item } from "./_model";

import { item_mystic_staff } from "./item_mystic_staff";
import { item_soul_booster } from "./item_soul_booster";

export const item_octarine_core: Item = {
	nameInternal: "item_octarine_core",
	nameVisual: "Octarine Core",

	recipeParts: [
		item_mystic_staff,
		item_soul_booster
	]
};
