import { Item, recipify } from "./_model";

import { item_helm_of_iron_will } from "./item_helm_of_iron_will";
import { item_null_talisman } from "./item_null_talisman";

export const item_veil_of_discord: Item = {
	nameInternal: "item_veil_of_discord",
	nameVisual: "Veil of Discord",

	recipeParts: [
		item_helm_of_iron_will,
		item_null_talisman,
		item_null_talisman
	],

	abilityCooldown: 20,
	abilityManaCost: 50
};

export const item_recipe_veil_of_discord = recipify(item_veil_of_discord, 400);
