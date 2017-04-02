import { Item } from "./_model";

import { item_blade_of_alacrity } from "./item_blade_of_alacrity";
import { item_ogre_axe } from "./item_ogre_axe";
import { item_point_booster } from "./item_point_booster";
import { item_staff_of_wizardry } from "./item_staff_of_wizardry";

export const item_ultimate_scepter: Item = {
	nameInternal: "item_ultimate_scepter",
	nameVisual: "Aghanim's Scepter",

	recipeParts: [
		item_blade_of_alacrity,
		item_ogre_axe,
		item_point_booster,
		item_staff_of_wizardry
	]
};
