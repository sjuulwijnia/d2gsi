import { Item } from "./_model";

import { item_staff_of_wizardry } from "./item_staff_of_wizardry";
import { item_vitality_booster } from "./item_vitality_booster";

export const item_rod_of_atos: Item = {
	nameInternal: "item_rod_of_atos",
	nameVisual: "Rod of Atos",

	recipeParts: [
		item_staff_of_wizardry,
		item_staff_of_wizardry,
		item_vitality_booster
	],

	abilityCooldown: 16,
	abilityManaCost: 50
};
