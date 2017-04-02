import { Item, recipify } from "./_model";

import { item_blades_of_attack } from "./item_blades_of_attack";
import { item_gloves } from "./item_gloves";
import { item_helm_of_iron_will } from "./item_helm_of_iron_will";

export const item_armlet: Item = {
	nameInternal: "item_armlet",
	nameVisual: "Armlet of Mordiggian",

	recipeParts: [
		item_blades_of_attack,
		item_gloves,
		item_helm_of_iron_will
	]
};

export const item_recipe_armlet = recipify(item_armlet, 550);
