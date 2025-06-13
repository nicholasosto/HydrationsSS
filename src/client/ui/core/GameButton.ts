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

// /* =============================================== Imports ========================================= */
import Fusion, { New, Children, OnEvent, Value, Computed, PropertyTable } from "@rbxts/fusion";
import { GameColors } from "../quarks";

/* =============================================== GameButton Props ========================================= */
export interface GameButtonProps extends PropertyTable<ImageButton> {
	OnClick: () => void; // Function to call when the button is clicked
	Children?: Fusion.ChildrenValue; // Optional children for the button
	HoldMeter?: Fusion.Value<number>; // Optional hold meter for the button
	CooldownMeter?: Fusion.Value<number>; // Optional cooldown meter for the button
}

/* =============================================== GameButton Component ========================================= */
export const GameButton = (props: GameButtonProps) => {
	// Hover state management
	const isHovered = Value(false);

	// Background color based on hover state
	const bgColor = Computed(() => (isHovered.get() ? GameColors.ButtonBackgroundHover : GameColors.ButtonBackground));

	// Hold Meter
	const holdMeter = props.HoldMeter ?? Value(0);
	// Cooldown Meter
	const cooldownMeter = props.CooldownMeter ?? Value(0);

	const customComponent = New("ImageButton")({
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
		[OnEvent("MouseButton1Down")]: () => {
			// Start hold meter
			holdMeter.set(0);
			task.spawn(() => {
				while (isHovered.get() && holdMeter.get() < 100) {
					holdMeter.set(holdMeter.get() + 1);
					task.wait(0.5); // Adjust the speed of the hold meter
					print(`Hold Meter: ${holdMeter.get()}`);
				}
			});
		},
		[OnEvent("MouseButton1Up")]: () => {
			if (isHovered.get()) {
				// Reset hold meter on release
				print("Hold Meter Reset");
				print(`Cooldown Meter: ${cooldownMeter.get()}`);
				holdMeter.set(0);
			}
		},
		[Children]: {},
	});
	return customComponent;
};
