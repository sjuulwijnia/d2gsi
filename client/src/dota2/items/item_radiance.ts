import { Item, recipify } from "./_model";

import { item_relic } from "./item_relic";

export const item_radiance: Item = {
	nameInternal: "item_radiance",
	nameVisual: "Radiance",

	recipeParts: [
		item_relic
	]
};

export const item_recipe_radiance = recipify(item_radiance, 1350);
