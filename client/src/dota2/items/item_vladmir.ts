import { Item } from "./_model";

import { item_headdress } from "./item_headdress";
import { item_lifesteal } from "./item_lifesteal";
import { item_ring_of_basilius } from "./item_ring_of_basilius";

export const item_vladmir: Item = {
	nameInternal: "item_vladmir",
	nameVisual: "Vladmir's Offering",

	recipeParts: [
		item_headdress,
		item_lifesteal,
		item_ring_of_basilius
	]
};
