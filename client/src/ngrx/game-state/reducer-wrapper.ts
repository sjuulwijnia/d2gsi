import { GameState, GameStateItems } from "../../dota2";

import { AverageView } from "./models";
import { BuybackView } from "./models";
import { CreepScoreView } from "./models";
import { GoldView } from "./models";
import { HeroView } from "./models";
import { KDAView } from "./models";
import { KillListView } from "./models";
import { MatchStatisticsView } from "./models";
import { PositionView } from "./models";
import { WardView } from "./models";

export class GameStateReducerClass {
	@gameStateNullDecorator('player', 'items')
	public getGold(gameState: GameState): GoldView {
		return {
			gpm: gameState.player.gpm,
			networth: gameState.networth,

			total: gameState.player.gold,
			unreliable: gameState.player.goldUnreliable,
			reliable: gameState.player.goldReliable
		};
	}

	@gameStateNullDecorator('player')
	public getGPM(gameState: GameState): AverageView<number> {
		return {
			current: gameState.player.gpm,
			average: 0,
			averageHero: 0
		};
	}

	@gameStateNullDecorator('player')
	public getXPM(gameState: GameState): AverageView<number> {
		return {
			current: gameState.player.xpm,
			average: 0,
			averageHero: 0
		};
	}

	@gameStateNullDecorator('player')
	public getKDA(gameState: GameState): KDAView {
		return {
			kills: gameState.player.kills,
			deaths: gameState.player.deaths,
			assists: gameState.player.assists
		};
	}

	@gameStateNullDecorator('player')
	public getKillList(_gameState: GameState): KillListView {
		return {};
	}

	@gameStateNullDecorator('player')
	public getCreepScore(gameState: GameState): CreepScoreView {
		return {
			lastHits: gameState.player.lastHits,
			denies: gameState.player.denies
		};
	}

	@gameStateNullDecorator('player', 'map')
	public getMatchStatistics(gameState: GameState): MatchStatisticsView {
		return {
			matchId: gameState.map.matchID,
			time: gameState.map.clockTimeVisual,
			gameState: gameState.map.mapGameState,
			gameStateVisual: gameState.map.mapGameStateVisual
		};
	}

	@gameStateNullDecorator('map')
	public getWard(gameState: GameState): WardView {
		return {
			cooldown: gameState.map.wardCooldown,
			cooldownVisual: gameState.map.wardCooldownVisual,
			available: gameState.map.wardCooldown === 0
		};
	}

	@gameStateNullDecorator('hero', 'items', 'map', 'player')
	public getBuyback(gameState: GameState): BuybackView {
		return {
			buybackCost: gameState.hero.buybackCost,
			deathCost: gameState.deathCost,
			cooldown: gameState.hero.buybackCooldown,
			cooldownVisual: gameState.hero.buybackCooldownVisual,
			available: gameState.buybackAvailable
		};
	}

	@gameStateNullDecorator('hero')
	public getHero(gameState: GameState): HeroView {
		if (!gameState.hero.hero) {
			return null;
		}

		return {
			name: gameState.hero.hero.nameInternal,
			nameVisual: gameState.hero.hero.nameVisual,

			level: gameState.hero.level,
			isAlive: gameState.hero.isAlive,

			healthCurrent: gameState.hero.healthCurrent,
			healthTotal: gameState.hero.healthTotal,
			healthPercentage: gameState.hero.healthPercentage,

			manaCurrent: gameState.hero.manaCurrent,
			manaTotal: gameState.hero.manaTotal,
			manaPercentage: gameState.hero.manaPercentage
		};
	}

	@gameStateNullDecorator('hero', 'map')
	public getPosition(gameState: GameState): PositionView {
		return {
			heroName: gameState.hero.name,
			isAlive: gameState.hero.isAlive,

			mapName: gameState.map.mapName,
			mapNameVisual: gameState.map.mapNameVisual,

			positionX: gameState.hero.positionX,
			positionY: gameState.hero.positionY
		};
	}

	@gameStateNullDecorator('items')
	public getItems(gameState: GameState): GameStateItems {
		return gameState.items;
	}
}

type GameStateProperties = 'hero' | 'items' | 'map' | 'player';
function gameStateNullDecorator(...properties: GameStateProperties[]) {
	return (_0: any, _1: any, descriptor: TypedPropertyDescriptor<any>) => {
		const originalMethod = descriptor.value;
		descriptor.value = function (...args: any[]) {
			if (args.length === 0) {
				return null;
			}

			const gameState: GameState = args[0];
			if (!gameState || !gameState.hasGameState) {
				return null;
			}

			for (let property of properties) {
				if (!gameState[property] || !gameState[property].hasGameState) {
					return null;
				}
			}

			return originalMethod.apply(this, args);
		}

		return descriptor;
	}
}
