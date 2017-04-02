export interface AverageView<T> {
	current: T;
	average: T;
	averageHero?: T;
}

export interface MatchStatisticsView {
	matchId: number;
	time: string;
	gameState: string;
	gameStateVisual: string;
}

export interface BuybackView {
	buybackCost: number;
	deathCost: number;
	cooldown: number;
	cooldownVisual: string;
	available: boolean;
}

export interface GoldView {
	gpm: number;
	networth: number;

	total: number;
	unreliable: number;
	reliable: number;
}

export interface CreepScoreView {
	lastHits: number;
	denies: number;
}

export interface KDAView {
	kills: number;
	deaths: number;
	assists: number;
}

export interface KillListView {

}

export interface WardView {
	cooldown: number;
	cooldownVisual: string;
	available: boolean;
}

export interface HeroView {
	name: string;
	nameVisual: string;
	isAlive: boolean;
	level: number;


	healthTotal: number;
	healthCurrent: number;
	healthPercentage: number;

	manaTotal: number;
	manaCurrent: number;
	manaPercentage: number;
}

export interface PositionView {
	heroName: string;
	isAlive: boolean;

	mapName: string;
	mapNameVisual: string;

	positionX: number;
	positionY: number;
}
