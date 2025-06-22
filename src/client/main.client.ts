import Fusion, { Children } from "@rbxts/fusion";
import { GameWindowProps, FusionHUD, SoulForge, GameWindow } from "./ui";
import { PlayerGui } from "./ui/references";
import { SplashTester } from "./ui/screens/SplashTester";
import { TestScreen } from "./ui/screens/TestScreen";
import { GameButton } from "./ui/core";
import { IconButton } from "./ui/atoms/buttons/IconButton";

/* ========================== TEST COMPONENTS ========================== */
const IconButtonTest = IconButton({
	Icon: "rbxassetid://12345678", // Replace with a valid icon ID
	OnClick: () => {
		print("IconButton cljjicked!");
	},
	Size: new UDim2(0, 30, 0, 40),
	Position: UDim2.fromScale(0.5, 0.5),
	AnchorPoint: new Vector2(0.5, 0.5),
	BackgroundTransparency: 1,
});

const BaseScreenPropTest = {
	Name: "BaseScreenPropTest",
	Parent: PlayerGui,
	Title: "Base Screen Test",
	DragEnabled: true,
	Children: {
		IconButton: IconButtonTest,
	},
};

const BaseScreenTest = GameWindow(BaseScreenPropTest);

print("BaseScreenTest created:", BaseScreenTest);
