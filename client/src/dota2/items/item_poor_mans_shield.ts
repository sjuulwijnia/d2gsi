import { Item } from "./_model";

import { item_slippers } from "./item_slippers";
import { item_stout_shield } from "./item_stout_shield";

export const item_poor_mans_shield: Item = {
	nameInternal: "item_poor_mans_shield",
	nameVisual: "Poor Man's Shield",

	recipeParts: [
		item_slippers,
		item_slippers,
		item_stout_shield
	]
};
