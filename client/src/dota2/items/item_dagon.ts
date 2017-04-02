import { Item, recipify } from "./_model";

import { item_null_talisman } from "./item_null_talisman";
import { item_staff_of_wizardry } from "./item_staff_of_wizardry";

export const item_dagon: Item = {
	nameInternal: "item_dagon",
	nameVisual: "Dagon (Level 1)",

	recipeParts: [
		item_null_talisman,
		item_staff_of_wizardry
	],

	abilityCooldown: 35,
	abilityManaCost: 180
};

export const item_dagon_2: Item = {
	nameInternal: "item_dagon_2",
	nameVisual: "Dagon (Level 2)",

	recipeParts: [
		item_dagon
	],

	abilityCooldown: 30,
	abilityManaCost: 180
};

export const item_dagon_3: Item = {
	nameInternal: "item_dagon_3",
	nameVisual: "Dagon (Level 3)",

	recipeParts: [
		item_dagon_2
	],

	abilityCooldown: 25,
	abilityManaCost: 180
};

export const item_dagon_4: Item = {
	nameInternal: "item_dagon_4",
	nameVisual: "Dagon (Level 4)",

	recipeParts: [
		item_dagon_3
	],

	abilityCooldown: 20,
	abilityManaCost: 180
};

export const item_dagon_5: Item = {
	nameInternal: "item_dagon_5",
	nameVisual: "Dagon (Level 5)",

	recipeParts: [
		item_dagon_4
	],

	abilityCooldown: 15,
	abilityManaCost: 180
};

export const item_recipe_dagon = recipify(item_dagon, 1250, item_dagon_2, item_dagon_3, item_dagon_4, item_dagon_5);
