import { GameStateView } from "../ngrx/view/models";

import { ViewEmpty } from "./game-state-views/empty";
import { ViewHero } from "./game-state-views/hero";
import { ViewGold } from "./game-state-views/gold";
import { ViewGPM } from "./game-state-views/gpm";
import { ViewXPM } from "./game-state-views/xpm";
import { ViewBuyback } from "./game-state-views/buyback";
import { ViewInventory } from "./game-state-views/inventory";
import { ViewWard } from "./game-state-views/ward";
import { ViewKDA } from "./game-state-views/kda";
import { ViewPosition } from "./game-state-views/position";
import { ViewCreepScore } from "./game-state-views/creep-score";
import { ViewMatchStatistics } from "./game-state-views/match-statistics";

export const VIEWS: GameStateView[] = [
	ViewHero,
	ViewPosition,
	ViewGold,
	ViewBuyback,
	ViewXPM,
	ViewInventory,
	ViewKDA,
	ViewCreepScore,
	ViewWard,
	ViewMatchStatistics,
	ViewGPM,

	ViewEmpty,
	ViewEmpty,
	ViewEmpty
];
