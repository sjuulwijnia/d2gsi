import { Item, recipify } from "./_model";

import { item_headdress } from "./item_headdress";
import { item_hood_of_defiance } from "./item_hood_of_defiance";

export const item_pipe: Item = {
	nameInternal: "item_pipe",
	nameVisual: "Pipe of Insight",

	recipeParts: [
		item_headdress,
		item_hood_of_defiance
	],

	abilityCooldown: 60,
	abilityManaCost: 100
};

export const item_recipe_pipe = recipify(item_pipe, 800);
