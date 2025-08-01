/// <reference types="@rbxts/types" />

/**
 * @file        Meter.ts
 * @module      Meter
 * @layer       Client/Molecule
 * @description Progress meter with label and optional frame image.
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

import Fusion, { Computed, Value } from "@rbxts/fusion";
import { MeterState } from "../states/MeterState";
import { GameImage, GameText, GamePanel } from "../core";
import { GameImages } from "shared/assets/image";

export interface MeterProps {
	MeterState: MeterState;
	FrameImage?: ImageLabel; // Optional frame image for the meter
}

export const Meter = (props: MeterProps) => {
	const { MeterState, FrameImage } = props;
	return GamePanel({
		Name: "Meter",
		Size: UDim2.fromOffset(200, 50),
		Position: UDim2.fromScale(0.5, 0.5),
		BackgroundTransparency: 0.5,
		BorderImage: FrameImage,
		Children: {
			FillBar: GamePanel({
				Name: "FillBar",
				Size: Computed(() => UDim2.fromScale(MeterState.PercentProgress.get(), 1)),
				Position: UDim2.fromScale(0, 0),
				BackgroundColor3: new Color3(0.2, 0.8, 0.2), // Green for fill
				BackgroundTransparency: 0.2,
				BorderImage: FrameImage,
			}),
			BackgroundTexture: GameImage({ Image: GameImages.TextureImage.BoneDoily }),
			Text: GameText({ ValueText: MeterState.Label }),
		},
	});
};
