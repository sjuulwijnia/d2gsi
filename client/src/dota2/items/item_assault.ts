import { Item, recipify } from "./_model";

import { item_chainmail } from "./item_chainmail";
import { item_hyperstone } from "./item_hyperstone";
import { item_platemail } from "./item_platemail";

export const item_assault: Item = {
	nameInternal: "item_assault",
	nameVisual: "Assault Cuirass",

	recipeParts: [
		item_chainmail,
		item_hyperstone,
		item_platemail
	]
};

export const item_recipe_assault = recipify(item_assault, 1300);
