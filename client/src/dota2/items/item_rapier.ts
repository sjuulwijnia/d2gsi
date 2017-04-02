import { Item } from "./_model";

import { item_demon_edge } from "./item_demon_edge";
import { item_relic } from "./item_relic";

export const item_rapier: Item = {
	nameInternal: "item_rapier",
	nameVisual: "Divine Rapier",

	recipeParts: [
		item_demon_edge,
		item_relic
	]
};
