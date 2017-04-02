import { Item, recipify } from "./_model";

import { item_gloves } from "./item_gloves";
import { item_mithril_hammer } from "./item_mithril_hammer";

export const item_maelstrom: Item = {
	nameInternal: "item_maelstrom",
	nameVisual: "Maelstrom",

	recipeParts: [
		item_gloves,
		item_mithril_hammer
	]
};

export const item_recipe_maelstrom = recipify(item_maelstrom, 700);
