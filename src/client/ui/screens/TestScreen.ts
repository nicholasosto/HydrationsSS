import Fusion, { Children, New } from "@rbxts/fusion";
import { PlayerGui } from "../references";
import { GameButton } from "../atoms/buttons";
import { GamePanel } from "../atoms";
import { BorderImage } from "../core";

const TestChildren = {
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

export const TestScreen = () =>
	New("ScreenGui")({
		Name: "TestScreen",
		ResetOnSpawn: false,
		IgnoreGuiInset: true,
		Enabled: true,
		Parent: PlayerGui,
		[Children]: {
			...TestChildren,
		},
	});
