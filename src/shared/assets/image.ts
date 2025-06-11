/**
 * @module      ImageAssets
 * @author      Trembus
 * @layer       Constants
 * @description List of image asset IDs used in the game, including icons and backgrounds.
 *
 * ╭──────────────────────────────╮
 * │  Soul Steel · Coding Guide   │
 * │  Fusion v4 · Strict TS · ECS │
 * ╰──────────────────────────────╯
 *
 * @since        0.1.0
 * @lastUpdated  2025-06-10 by Trembus
 */

export const GameImages = {
	Currency: {
		Coins: "rbxassetid://127745571044516",
		Shards: "rbxassetid://73893872719367",
		Tombs: "rbxassetid://121291227474039",
	},
} as const;

export type GameImageKey = keyof typeof GameImages;
export type GameImageSubKey = keyof (typeof GameImages)[GameImageKey];
