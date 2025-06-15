/// <reference types="@rbxts/types" />

/**
 * @file        AttributeControl.ts
 * @module      AttributeControl
 * @layer       Client/Molecule
 * @description UI element for modifying player attributes.
 *
 * ╭───────────────────────────────╮
 * │  Soul Steel · Coding Guide    │
 * │  Fusion v4 · Strict TS · ECS  │
 * ╰───────────────────────────────╯
 *
 * @author       Trembus
 * @license      MIT
 * @since        0.2.0
 * @lastUpdated  2025-06-15 by Trembus – Added header
 *
 * @dependencies
 *   @rbxts/fusion ^0.4.0
 */

/* ==================================== Attribute Control Imports ====================== */
import Fusion, { Value } from "@rbxts/fusion";
import { GameText, GamePanel, GameImage, GameButton, InfoLabel } from "../core";
import { Layout, Pad } from "../quarks";
import { AttributeKey, AttributesMeta } from "shared";
import { PlayerState } from "../states";
import { GameImages } from "shared/assets/image";
import { ModifyPlayerAttribute } from "../states/StateHelpers";

/* ==================================== Attribute Control Props ========================================= */
export interface AttributeControlProps {
	AttributeKey: AttributeKey;
}

/* ==================================== Attribute Control Component ==================================== */
export const AttributeControl = (props: AttributeControlProps) => {
	/* Get Meta Data  and state object */
	const attributeMeta = AttributesMeta[props.AttributeKey];
	const attributeState = PlayerState.Attributes[props.AttributeKey];

	/* Decompose Meta Data */
	const iconId = attributeMeta.iconId;
	const min = attributeMeta.min;
	const max = attributeMeta.max;
	const displayName = attributeMeta.displayName;

	// Attribute Icon
	const attributeIcon = GameImage({
		Image: iconId,
	});

	// Attribute Label and Value
	const attributeLabel = InfoLabel({
		Label: Value(displayName),
		Value: attributeState,
		Variant: "recessed",
	});

	// Increment Button
	const incrementButton = GameButton({
		ButtonImage: GameImages["TextureImage"].BoneDoily,
		OnClick: () => {
			ModifyPlayerAttribute(props.AttributeKey, 1);
			print(`Incremented ${props.AttributeKey} by 1`);
		},
	});

	// Decrement Button
	const decrementButton = GameButton({
		ButtonImage: GameImages["TextureImage"].BoneDoily,
		OnClick: () => {
			ModifyPlayerAttribute(props.AttributeKey, -1);
			print(`decremented ${props.AttributeKey} by -1`);
		},
	});

	// Attribute Control Component
	const customComponent = GamePanel({
		Size: new UDim2(0, 400, 0, 100),
		BackgroundColor3: Color3.fromRGB(30, 30, 30),
		BorderSizePixel: 0,
		Layout: Layout.HorizontalSet(),
		Padding: Pad.All(new UDim(0, 3)),
		Children: {
			Icon: attributeIcon,
			Label: attributeLabel,
			IncrementButton: incrementButton,
			DecrementButton: decrementButton,
		},
	});

	// Retrun Custom Component
	return customComponent;
};
