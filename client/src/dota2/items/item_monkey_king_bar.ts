import { Item } from "./_model";

import { item_demon_edge } from "./item_demon_edge";
import { item_javelin } from "./item_javelin";

export const item_monkey_king_bar: Item = {
	nameInternal: "item_monkey_king_bar",
	nameVisual: "Monkey King Bar",

	recipeParts: [
		item_demon_edge,
		item_javelin,
		item_javelin
	]
};
