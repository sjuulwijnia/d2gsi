import { Hero } from "./_model";

import { AGILITY_HEROES } from "./agility";
import { INTELLIGENCE_HEROES } from "./intelligence";
import { STRENGTH_HEROES } from "./strength";

const heroes: Hero[] = [
	...AGILITY_HEROES,
	...INTELLIGENCE_HEROES,
	...STRENGTH_HEROES
];

const HEROES: { [dota2InternalName: string]: Hero } = {};
heroes.forEach(hero => {
	if (!!HEROES[hero.nameInternal]) {
		console.error(`HERO ALREADY KNOWN: ${hero.nameInternal}`);
		console.error(`CURRENT:`, HEROES[hero.nameInternal]);
		console.error(`NEW:`, hero);
		throw new Error();
	}

	HEROES[hero.nameInternal] = Object.seal(hero);
});

export { Hero, HEROES };
