import { Item } from "./_model";

import { item_boots_of_elves } from "./item_boots_of_elves";
import { item_ogre_axe } from "./item_ogre_axe";

export const item_dragon_lance: Item = {
	nameInternal: "item_dragon_lance",
	nameVisual: "Dragon Lance",

	recipeParts: [
		item_boots_of_elves,
		item_boots_of_elves,
		item_ogre_axe
	]
};
