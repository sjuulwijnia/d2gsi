import { Item } from "./_model";

import { item_belt_of_strength } from "./item_belt_of_strength";
import { item_boots } from "./item_boots";
import { item_gloves } from "./item_gloves";

export const item_power_treads: Item = {
	nameInternal: "item_power_treads",
	nameVisual: "Power Treads",

	recipeParts: [
		item_belt_of_strength,
		item_boots,
		item_gloves
	]
};
