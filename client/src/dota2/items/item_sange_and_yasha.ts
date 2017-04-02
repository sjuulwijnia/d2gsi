import { Item } from "./_model";

import { item_sange } from "./item_sange";
import { item_yasha } from "./item_yasha";

export const item_sange_and_yasha: Item = {
	nameInternal: "item_sange_and_yasha",
	nameVisual: "Sange and Yasha",

	recipeParts: [
		item_sange,
		item_yasha
	]
};
