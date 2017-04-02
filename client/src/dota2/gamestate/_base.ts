import { getTime, splitAndCapitalize } from "../../util";

export abstract class GameStateBase {
	public get hasGameState() {
		return !!this.gameState && (!!this.gameStateField ? !!this.gameState[this.gameStateField] : true);
	}

	constructor(
		protected gameState: any,
		protected gameStateField: string = null
	) { }

	protected abstract parseGameState(): void;

	protected getTime(time: number): string {
		return getTime(time);
	}

	protected splitAndCapitalize(value: string, splitOn = '_'): string {
		return splitAndCapitalize(value, splitOn);
	}
}

export function gameStateValue<T>(gameStateObject: string, gameStateObjectKey: string) {
	return (_0: any, _1: string, descriptor: TypedPropertyDescriptor<T>) => {
		const get = descriptor.get;

		descriptor.get = function (): T {
			if (!this.gameState || !this.gameState[gameStateObject]) {
				return get();
			}

			return this.gameState[gameStateObject][gameStateObjectKey];
		}
	}
}

export function gameStateCache<T>() {
	return (_0: any, propertyKey: string, descriptor: TypedPropertyDescriptor<T>) => {
		const cachePropertyKey = `___${propertyKey}_cache`;
		const get = descriptor.get;

		descriptor.get = function (): T {
			if (!this[cachePropertyKey]) {
				this[cachePropertyKey] = get.bind(this)();
			}

			return this[cachePropertyKey];
		}
	}
}
