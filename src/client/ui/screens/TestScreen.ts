/* ================================================= Imports ========================================= */
import { Children, New } from "@rbxts/fusion";
import { PlayerGui } from "../references";
import { GameButton } from "../atoms/buttons";
import { GamePanel } from "../atoms";
import { BorderImage, GameImage } from "../core";
import { GameImages } from "shared/assets/image";

/* =============================================== Panel Tests ========================================= */
const PanelTests = {
	FramePanelSquare: GamePanel({
		Size: UDim2.fromOffset(200, 200),
		Position: UDim2.fromScale(0.5, 0.2),
		BorderImage: BorderImage.GothicMetal(),
	}),
	FramePanelRectangle: GamePanel({
		Size: UDim2.fromOffset(200, 100),
		Position: UDim2.fromScale(0.5, 0.4),
		BorderImage: BorderImage.GothicMetal(),
	}),
};

/* =============================================== Image Children ========================================= */
const ImageChildren = {
	Basic: GameImage({}),
	FrameImage: BorderImage.RedThick(),
	FrameImage2: BorderImage.GothicMetal(),
	TextureImage: GameImage({
		Image: GameImages.Ability.Blood_Elemental,
		Size: UDim2.fromOffset(100, 200),
		Position: UDim2.fromScale(0.5, 0.6),
	}),
};

/* =============================================== Test Screen ========================================= */
export const TestScreen = () =>
	New("ScreenGui")({
		Name: "TestScreen",
		ResetOnSpawn: false,
		IgnoreGuiInset: true,
		Enabled: true,
		Parent: PlayerGui,
		[Children]: {
			PanelTests: PanelTests,
			ImageTests: ImageChildren,
		},
	});
