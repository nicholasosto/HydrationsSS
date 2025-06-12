/// <reference types="@rbxts/types" />

/**
 * @file        GameButton.ts
 * @module      GameButton
 * @layer       Client/Atom
 * @description Clickable button atom built on `ImageButton`.
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

import Fusion, { New, Children, OnEvent, Value, Computed } from "@rbxts/fusion";
import { GameText } from "../atoms/text";
import { GameColors } from "../quarks";

export interface GameButtonProps extends Fusion.PropertyTable<ImageButton> {
	OnClick: () => void;
	Children?: Fusion.ChildrenValue;
	Text?: string;
	Image?: string;
}

export const GameButton = (props: GameButtonProps) => {
	const isHovered = Value(false);

	const bgColor = Computed(() => (isHovered.get() ? GameColors.ButtonBackgroundHover : GameColors.ButtonBackground));

	const component = New("ImageButton")({
		Name: props.Name ?? "GameButton",
		AnchorPoint: props.AnchorPoint ?? new Vector2(0.5, 0.5),
		BackgroundColor3: bgColor,
		BackgroundTransparency: props.BackgroundTransparency ?? 0,
		Image: props.Image,
		Position: props.Position ?? UDim2.fromScale(0.5, 0.5),
		Size: props.Size ?? UDim2.fromOffset(100, 40),
		LayoutOrder: props.LayoutOrder ?? 0,
		[OnEvent("MouseEnter")]: () => isHovered.set(true),
		[OnEvent("MouseLeave")]: () => isHovered.set(false),
		[OnEvent("Activated")]: props.OnClick,
		[Children]: {
			Label: props.Text ? GameText({ ValueText: props.Text }) : undefined,
			...(props.Children ?? {}),
		},
	});
	return component;
};
