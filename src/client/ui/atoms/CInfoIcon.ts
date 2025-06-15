/// <reference types="@rbxts/types" />

/**
 * @file        CInfoIcon.ts
 * @module      CInfoIcon
 * @layer       Client/Atom
 * @description Simplified info icon atom built on GamePanel.
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
 *
 * @remarks
 *   Streamlined version using GamePanel as the root container.
 */

import Fusion from "@rbxts/fusion";
import { GamePanel, GameImage, GameText } from "../core";
import { Pad } from "../quarks";

export interface CInfoIconProps {
	Image: string;
	Value: Fusion.Value<string | number>;
}

export const CInfoIcon = (props: CInfoIconProps) =>
	GamePanel({
		Name: "CInfoIcon",
		Size: UDim2.fromOffset(70, 70),
		Padding: Pad.Bottom(new UDim(0.02, 0)),
		Children: {
			Icon: GameImage({ Image: props.Image, Size: UDim2.fromScale(1, 1) }),
			Label: GameText({
				ValueText: props.Value,
				AnchorPoint: new Vector2(0.5, 1),
				Position: UDim2.fromScale(0.5, 1),
				Size: UDim2.fromScale(0.9, 0.2),
			}),
		},
	});
