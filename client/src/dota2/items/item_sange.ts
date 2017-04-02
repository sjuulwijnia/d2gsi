import { Item, recipify } from "./_model";

import { item_belt_of_strength } from "./item_belt_of_strength";
import { item_ogre_axe } from "./item_ogre_axe";

export const item_sange: Item = {
	nameInternal: "item_sange",
	nameVisual: "Sange",

	recipeParts: [
		item_belt_of_strength,
		item_ogre_axe
	]
};

export const item_recipe_sange = recipify(item_sange, 600);
