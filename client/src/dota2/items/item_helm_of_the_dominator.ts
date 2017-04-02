import { Item, recipify } from "./_model";

import { item_gloves } from "./item_gloves";
import { item_headdress } from "./item_headdress";

export const item_helm_of_the_dominator: Item = {
	nameInternal: "item_helm_of_the_dominator",
	nameVisual: "Helm of the Dominator",

	recipeParts: [
		item_gloves,
		item_headdress
	],

	abilityCooldown: 60,
	abilityManaCost: 0
};

export const item_recipe_helm_of_the_dominator = recipify(item_helm_of_the_dominator, 800);
