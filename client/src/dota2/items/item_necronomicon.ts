import { Item, recipify } from "./_model";

import { item_belt_of_strength } from "./item_belt_of_strength";
import { item_staff_of_wizardry } from "./item_staff_of_wizardry";

export const item_necronomicon: Item = {
	nameInternal: "item_necronomicon",
	nameVisual: "Necronomicon (Level 1)",

	recipeParts: [
		item_belt_of_strength,
		item_staff_of_wizardry
	],

	abilityCooldown: 90,
	abilityManaCost: 50
};

export const item_necronomicon_2: Item = {
	nameInternal: "item_necronomicon_2",
	nameVisual: "Necronomicon (Level 2)",

	recipeParts: [
		item_necronomicon
	],

	abilityCooldown: 90,
	abilityManaCost: 50
};

export const item_necronomicon_3: Item = {
	nameInternal: "item_necronomicon_3",
	nameVisual: "Necronomicon (Level 3)",

	recipeParts: [
		item_necronomicon_2
	],

	abilityCooldown: 90,
	abilityManaCost: 50
};

export const item_recipe_necronomicon = recipify(item_necronomicon, 1200, item_necronomicon_2, item_necronomicon_3);
