/// <reference types="@rbxts/types" />

/**
 * @file        GameText.ts
 * @module      GameText
 * @layer       Client/Atom
 * @description Styled text label atom with optional hover text.
 *
 * ╭───────────────────────────────╮
 * │  Soul Steel · Coding Guide    │
 * │  Fusion v4 · Strict TS · ECS  │
 * ╰───────────────────────────────╯
 *
 * @author       Trembus
 * @license      MIT
 * @since        0.2.0
 * @lastUpdated  2025-06-15 by Trembus – Added label variants and hover text
 *
 * @dependencies
 *   @rbxts/fusion ^0.4.0
 */

import Fusion, { New, Children, Computed, Value, OnEvent, PropertyTable } from "@rbxts/fusion";
import { GameColors, Layout, ShadowGradient } from "../../quarks";
import { GamePanel } from "../GamePanel";
import { BorderImage } from "../GameImage";
import { InfoLabelProps } from "../CoreInterfaces";

export interface GameTextProps extends PropertyTable<TextLabel> {
	ValueText?: Fusion.Value<string | number>;
	HoverText?: string | Fusion.Value<string>;
	Variant?: "flat" | "recessed" | "extruded";
}

export const GameText = (props: GameTextProps) => {
	const textState = typeIs(props.ValueText, "table")
		? (props.ValueText as Fusion.Value<string | number>)
		: Value(props.ValueText ?? "");

	const hoverState = Value(false);
	const DisplayText = Computed(() => {
		const text = textState.get();
		const hoverText = "Hovered";
		return `${tostring(text)} ${hoverState.get() ? `Hovered` : ""}`;
	});

	return New("TextLabel")({
		Name: props.Name ?? "GameText",
		AnchorPoint: props.AnchorPoint ?? new Vector2(0.5, 0.5),
		BackgroundTransparency: props.Variant ? 0.2 : 1,
		BackgroundColor3: props.Variant === "recessed" ? GameColors.BackgroundHover : GameColors.BackgroundDefault,
		FontFace: new Font("rbxasset://fonts/families/Inconsolata.json"),
		Position: props.Position ?? UDim2.fromScale(0.5, 0.5),
		Size: props.Size ?? UDim2.fromScale(1, 1),
		TextSize: props.TextSize ?? 24,
		Text: DisplayText,
		TextColor3: props.TextColor3 ?? GameColors.TextDefault,
		TextScaled: false,
		[OnEvent("MouseEnter")]: () => hoverState.set(true),
		[OnEvent("MouseLeave")]: () => hoverState.set(false),
		[Children]: {
			Corner: props.Variant ? New("UICorner")({}) : undefined,
			Shadow: props.Variant === "recessed" ? ShadowGradient() : undefined,
		},
	});
};

export const InfoLabel = (props: InfoLabelProps) => {
	const label = typeIs(props.Label, "table") ? (props.Label as Fusion.Value<string>) : Value(props.Label);
	const value = props.Value;

	return GamePanel({
		Name: props.Name ?? "InfoLabel",
		Size: props.Size ?? UDim2.fromOffset(140, 24),
		Layout: Layout.HorizontalList(4),
		BorderImage: props.Variant === "extruded" ? BorderImage.GothicMetal() : undefined,
		Gradient: props.Variant === "recessed" ? ShadowGradient() : undefined,
		HoverEffect: props.HoverText !== undefined,
		Children: {
			Label: GameText({
				ValueText: label,
				AnchorPoint: new Vector2(0, 0.5),
				Position: UDim2.fromScale(0, 0.5),
				TextXAlignment: Enum.TextXAlignment.Left,
			}),
			Value: GameText({
				ValueText: value,
				AnchorPoint: new Vector2(1, 0.5),
				Position: UDim2.fromScale(1, 0.5),
				TextXAlignment: Enum.TextXAlignment.Right,
				HoverText: props.HoverText,
				Variant: props.Variant,
			}),
		},
	});
};

//export const CounterLabel = (props: CounterLabelProps) => InfoLabel(props);
