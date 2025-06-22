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
import Fusion, { New, Children, OnEvent, Value, Computed, PropertyTable, OnChange } from "@rbxts/fusion";
import { RunService } from "@rbxts/services";
import { GameColors } from "../quarks";
import { GamePanel } from "./GamePanel";
import { BorderImage, GameImage } from "./GameImage";
import { GamePanelProps } from "./CoreInterfaces";
import { GameText } from "./Text/GameText";

/* =============================================== GameButton Props ========================================= */
export interface GameButtonProps extends GamePanelProps {
	OnClick?: () => void; // Function to call when the button is clicked
	ButtonImage?: string; // Image to display on the button
	ButtonText?: string; // Text to display on the button
}

/* =============================================== Default Props ========================================= */
const DefaultProps = {
	Size: UDim2.fromOffset(50, 50), // Default size of the button
	BackgroundTransparency: 0.1,
	BorderImage: BorderImage.GothicMetal(),
};

/* =============================================== GameButton Component ========================================= */
export const GameButton = (props: GameButtonProps) => {
	// Hover state management
	const isHovered = Value(false);
	const isPressed = Value(false);
	// Computed property for hover state
	const isActive = Computed(() => isHovered.get() || isPressed.get());

	// Background color based on hover state
	const bgColor = Computed(() => (isHovered.get() ? GameColors.ButtonBackgroundHover : GameColors.ButtonBackground));

	// Props setup
	const buttonImage = GameImage({
		Image: props.ButtonImage ?? undefined,
	});

	const buttonText = GameText({ ValueText: Value(props.ButtonText ?? "") });

	props.Name = props.Name ?? "GameButton";
	props.BorderImage = props.BorderImage ?? DefaultProps.BorderImage;
	props.BackgroundTransparency = props.BackgroundTransparency ?? DefaultProps.BackgroundTransparency;

	props.AnchorPoint = props.AnchorPoint ?? new Vector2(0.5, 0.5);
	props.Position = props.Position ?? UDim2.fromScale(0.5, 0.5);
	props.Size = props.Size ?? DefaultProps.Size;
	props.DragEnabled = props.DragEnabled ?? false;
	props.LayoutOrder = props.LayoutOrder ?? 0;

	const customComponent = GamePanel({
		Name: props.Name,
		BorderImage: props.BorderImage,
		AnchorPoint: props.AnchorPoint,
		Position: props.Position,
		BackgroundColor3: bgColor,
		BackgroundTransparency: props.BackgroundTransparency,
		Size: props.Size,
		LayoutOrder: props.LayoutOrder,
		[OnEvent("MouseEnter")]: () => isHovered.set(true),
		[OnEvent("MouseLeave")]: () => isHovered.set(false),
		Children: {
			Button: New("ImageButton")({
				Name: "Button",
				BackgroundTransparency: 1,
				Size: UDim2.fromScale(1, 1),
				[OnEvent("Activated")]: () => {
					props.OnClick?.();
					print(`Button ${props.Name} clicked!`);
				},
			}),
			Text: buttonText,
			Image: buttonImage,
		},
	});
	return customComponent;
};
