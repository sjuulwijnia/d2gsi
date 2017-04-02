import { Item } from "./_model";

import { item_oblivion_staff } from "./item_oblivion_staff";
import { item_ogre_axe } from "./item_ogre_axe";

export const item_echo_sabre: Item = {
	nameInternal: "item_echo_sabre",
	nameVisual: "Echo Sabre",

	recipeParts: [
		item_oblivion_staff,
		item_ogre_axe
	],

	abilityCooldown: 5,
	abilityManaCost: 0
};
