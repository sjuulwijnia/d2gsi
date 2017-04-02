import { Item } from "./_model";

import { item_energy_booster } from "./item_energy_booster";
import { item_point_booster } from "./item_point_booster";
import { item_vitality_booster } from "./item_vitality_booster";

export const item_soul_booster: Item = {
	nameInternal: "item_soul_booster",
	nameVisual: "Soul Booster",

	recipeParts: [
		item_energy_booster,
		item_point_booster,
		item_vitality_booster
	]
};
