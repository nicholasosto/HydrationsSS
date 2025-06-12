/// <reference types="@rbxts/types" />

/**
 * @file        GameImage.ts
 * @module      GameImage
 * @layer       Client/Atom
 * @description Lightweight wrapper around `ImageLabel`.
 *
 * ╭───────────────────────────────╮
 * │  Soul Steel · Coding Guide    │
 * │  Fusion v4 · Strict TS · ECS  │
 * ╰───────────────────────────────╯
 *
 * @author       Trembus
 * @license      MIT
 * @since        0.2.0
 * @lastUpdated  2025-05-29 by Luminesa – Initial creation
 *
 * @dependencies
 *   @rbxts/fusion ^0.4.0
 */

import Fusion, { New } from "@rbxts/fusion";

export interface GameImageProps extends Fusion.PropertyTable<ImageLabel> {
	Image?: string;
	SecondaryImage?: string;
}

export function GameImage(props: GameImageProps): ImageLabel {
	return New("ImageLabel")({
		Name: props.Name ?? "GameImage",
		AnchorPoint: props.AnchorPoint ?? new Vector2(0.5, 0.5),
		BackgroundTransparency: 1,
		Image: props.Image ?? "rbxassetid://121566852339881",
		Size: props.Size ?? UDim2.fromScale(1, 1),
		Position: props.Position ?? UDim2.fromScale(0.5, 0.5),
		ZIndex: props.ZIndex ?? 1,
	});
}
