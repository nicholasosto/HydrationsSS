import Fusion, { Children, New } from "@rbxts/fusion";
import { PlayerGui } from "../references";
import { GameButton } from "../atoms/buttons";

const TestChildren = {
	GameButton: GameButton({
		Name: "TestButton",
		Size: new UDim2(0, 100, 0, 50),
		Position: new UDim2(0.5, -50, 0.5, -25),
		OnClick: () => {
			print("Test Button Clicked");
		},
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
