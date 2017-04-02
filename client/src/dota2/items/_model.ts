export interface Item {
	nameInternal: string;
	nameVisual: string;

	networth?: number;
	networthPerCharge?: number;

	abilityCooldown?: number;
	abilityManaCost?: number;

	recipeParts?: Item[];

	imageOverride?: string;
}

export function recipify(baseItem: Item, networth: number, ...extraItems: Item[]) {
	extraItems = extraItems || [];

	const recipe: Item = {
		nameInternal: baseItem.nameInternal.replace('item', 'item_recipe'),
		nameVisual: `Recipe: ${baseItem.nameVisual}`,

		networth: networth,

		imageOverride: 'item_recipe'
	};

	baseItem.recipeParts.push(recipe);
	extraItems.forEach(item => {
		if (!item.recipeParts) {
			console.log(item.nameVisual);
		}

		item.recipeParts.push(recipe);
	});

	return recipe;
}
