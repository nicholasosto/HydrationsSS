/**
 * @file        HoldButton.ts
 * @module      HoldButton
 * @layer       Client/Atom
 * @description Button that requires a hold duration before triggering OnClick.
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
import Fusion from "@rbxts/fusion";
import { ValueType } from "@rbxts/fusion/src/Types";
import { GamePanel } from "client/ui/core";
import { GamePanelProps } from "client/ui/core/CoreInterfaces";

/* ========================================= Decompsition ========================================= */
const { New, Children, OnEvent, Value, Computed } = Fusion;

/* ================================= HoldButton Props ========================================= */
export interface HoldButtonProps extends GamePanelProps {
	ButtonText?: ValueType<string>; // Text to display on the button
	ButtonImage?: ValueType<string>; // Image to display on the button
	OnHoldStart?: () => void; // Function to call when hold starts
	OnHoldEnd?: () => void; // Function to call when hold ends
}

export const HoldButton = (props: HoldButtonProps) => {
	/* ----- State ----- */
	const isHolding = Value(false);
	const holdTime = Value(0);
	//const holdDuration = Computed(() => props.HoldDuration ?? 1); // Default to 1 second if not provided

	/* ----- Template ----- */
	const customComponent = GamePanel({
		Name: props.Name ?? "HoldButton",
		Size: props.Size ?? UDim2.fromOffset(100, 40),
		HoverEffect: props.HoverEffect ?? true,
		Position: props.Position ?? UDim2.fromScale(0.5, 0.5),
		BackgroundTransparency: props.BackgroundTransparency ?? 0.6,
		[Children]: {
			Button: [],
		},
	});
};
