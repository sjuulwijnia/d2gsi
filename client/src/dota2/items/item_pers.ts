import { Item } from "./_model";

import { item_ring_of_health } from "./item_ring_of_health";
import { item_ring_of_mana } from "./item_ring_of_mana";

export const item_pers: Item = {
	nameInternal: "item_pers",
	nameVisual: "Perseverance",

	recipeParts: [
		item_ring_of_health,
		item_ring_of_mana
	]
};
