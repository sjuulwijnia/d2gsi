import { Item } from "./_model";

import { item_quarterstaff } from "./item_quarterstaff";
import { item_robe } from "./item_robe";
import { item_sobi_mask } from "./item_sobi_mask";

export const item_oblivion_staff: Item = {
	nameInternal: "item_oblivion_staff",
	nameVisual: "Oblivion Staff",

	recipeParts: [
		item_quarterstaff,
		item_robe,
		item_sobi_mask
	]
};
