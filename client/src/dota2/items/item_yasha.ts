import { Item, recipify } from "./_model";

import { item_blade_of_alacrity } from "./item_blade_of_alacrity";
import { item_boots_of_elves } from "./item_boots_of_elves";

export const item_yasha: Item = {
	nameInternal: "item_yasha",
	nameVisual: "Yasha",

	recipeParts: [
		item_blade_of_alacrity,
		item_boots_of_elves
	]
};

export const item_recipe_yasha = recipify(item_yasha, 600);
