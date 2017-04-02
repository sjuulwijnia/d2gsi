import { Item } from "./_model";

import { item_orb_of_venom } from "./item_orb_of_venom";
import { item_point_booster } from "./item_point_booster";
import { item_ultimate_orb } from "./item_ultimate_orb";

export const item_skadi: Item = {
	nameInternal: "item_skadi",
	nameVisual: "Eye of Skadi",

	recipeParts: [
		item_orb_of_venom,
		item_point_booster,
		item_ultimate_orb,
		item_ultimate_orb
	]
};
