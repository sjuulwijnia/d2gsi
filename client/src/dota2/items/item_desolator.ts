import { Item } from "./_model";

import { item_blight_stone } from "./item_blight_stone";
import { item_mithril_hammer } from "./item_mithril_hammer";

export const item_desolator: Item = {
	nameInternal: "item_desolator",
	nameVisual: "Desolator",

	recipeParts: [
		item_blight_stone,
		item_mithril_hammer,
		item_mithril_hammer
	]
};
