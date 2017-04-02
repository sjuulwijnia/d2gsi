import { Item, recipify } from "./_model";

import { item_energy_booster } from "./item_energy_booster";
import { item_ring_of_health } from "./item_ring_of_health";

export const item_aether_lens: Item = {
	nameInternal: "item_aether_lens",
	nameVisual: "Aether Lens",

	recipeParts: [
		item_energy_booster,
		item_ring_of_health
	]
};

export const item_recipe_aether_lens = recipify(item_aether_lens, 600);
