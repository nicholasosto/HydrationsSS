/// <reference types="@rbxts/types" />

/**
 * @file        GameText.ts
 * @module      GameText
 * @layer       Client/Atom
 * @description Simple text label wrapper with default styling.
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

import Fusion, { New, Computed, Value } from "@rbxts/fusion";
import { GameColors } from "../../quarks";

export interface GameTextProps extends Fusion.PropertyTable<TextLabel> {
	ValueText: Fusion.Value<string | number> | string | number;
	TextSize?: number;
	Size?: UDim2;
	Position?: UDim2;
	AnchorPoint?: Vector2;
	TextColor3?: Color3;
}

export const GameText = (props: GameTextProps) => {
	const textState = typeIs(props.ValueText, "table")
		? (props.ValueText as Fusion.Value<string | number>)
		: Value(props.ValueText);

	return New("TextLabel")({
		Name: props.Name ?? "GameText",
		AnchorPoint: props.AnchorPoint ?? new Vector2(0.5, 0.5),
		BackgroundTransparency: 1,
		FontFace: new Font("rbxasset://fonts/families/Inconsolata.json"),
		Position: props.Position ?? UDim2.fromScale(0.5, 0.5),
		Size: props.Size ?? UDim2.fromScale(1, 1),
		TextSize: props.TextSize ?? 24,
		Text: Computed(() => tostring(textState.get())),
		TextColor3: props.TextColor3 ?? GameColors.TextDefault,
		TextScaled: false,
	});
};
