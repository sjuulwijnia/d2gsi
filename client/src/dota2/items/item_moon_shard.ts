import { Item } from "./_model";

import { item_hyperstone } from "./item_hyperstone";

export const item_moon_shard: Item = {
	nameInternal: "item_moon_shard",
	nameVisual: "Moon Shard",

	recipeParts: [
		item_hyperstone,
		item_hyperstone
	]
};
