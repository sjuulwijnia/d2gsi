import { Item } from "./_model";

import { item_ring_of_health } from "./item_ring_of_health";
import { item_stout_shield } from "./item_stout_shield";
import { item_vitality_booster } from "./item_vitality_booster";

export const item_vanguard: Item = {
	nameInternal: "item_vanguard",
	nameVisual: "Vanguard",

	recipeParts: [
		item_ring_of_health,
		item_stout_shield,
		item_vitality_booster
	]
};
