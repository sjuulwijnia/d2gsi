import { Item, recipify } from "./_model";

import { item_ogre_axe } from "./item_ogre_axe";
import { item_mithril_hammer } from "./item_mithril_hammer";

export const item_black_king_bar: Item = {
	nameInternal: "item_black_king_bar",
	nameVisual: "Black King Bar",

	recipeParts: [
		item_ogre_axe,
		item_mithril_hammer
	],

	abilityCooldown: 80,
	abilityManaCost: 0
};

export const item_recipe_black_king_bar = recipify(item_black_king_bar, 1375);
