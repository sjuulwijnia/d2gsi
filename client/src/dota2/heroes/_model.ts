export interface Hero {
	nameInternal: string;
	nameVisual: string;

	primaryAttribute: HeroAttribute;

	abilities: HeroAbility[];
}

export enum HeroAttribute {
	STRENGTH = 1,
	AGILITY = 2,
	INTELLIGENCE = 3
}

export interface HeroAbility {
	nameInternal: string;
	nameVisual: string;
}
