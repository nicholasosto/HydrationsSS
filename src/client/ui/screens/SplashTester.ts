import { SplashTesterType } from "../types";
import { PlayerGui } from "../references";
import Fusion, { Hydrate, Value } from "@rbxts/fusion";
import { BorderImage, GameButton, GameImage, GamePanel, GameText } from "../core";
import { CreateTestElement } from "../_helpers/testHelpers";
import { GameImages } from "shared/assets/image";
import { Layout } from "../quarks";
const splashTester = PlayerGui.FindFirstChild("SplashTester") as SplashTesterType | undefined;

/* ===================================================== GameText ===================================================== */
const GameTextExamples = {
	Basic: GameText({
		ValueText: Value("Hello, World!"),
	}),
	Recessed: [],
};

const GameImageExamples = {
	Basic: CreateTestElement(
		GameImage({
			Image: GameImages.Control.TrippleArrow,
		}),
		"ChevronImage",
	),
};

/* ===================================================== GameButton ===================================================== */
const GameButtonExamples = {
	Basic: GameButton({
		Name: "TestButton",
		Size: UDim2.fromOffset(50, 50),
		ButtonImage: GameImages.Control.TrippleArrow,
		OnClick: () => print("Button clicked!"),
	}),
	Hold: [],
};

/* ===================================================== GamePanel ===================================================== */
const PanelTests = {
	Layout: Layout.VerticleList(),
	FramePanelSquare: CreateTestElement(
		GamePanel({
			Size: UDim2.fromOffset(200, 200),
			Position: UDim2.fromScale(0.5, 0.2),
			BorderImage: BorderImage.GothicMetal(),
		}),
		"FramePanelSquare",
	),
	FramePanelRectangle: CreateTestElement(
		GamePanel({
			Size: UDim2.fromOffset(200, 100),
			Position: UDim2.fromScale(0.5, 0.4),
			BorderImage: BorderImage.GothicMetal(),
		}),
		"RectanglePanel",
	),
};

/* ===================================================== SplashTester ===================================================== */
export const SplashTester = () => {
	if (splashTester === undefined) {
		warn("SplashTester not found in PlayerGui. Please ensure it exists.");
		return undefined; // SplashTester not found
	}
	const TextContainer = splashTester.ScreenBackground.GameTextContainer.Content;
	const ImageContainer = splashTester.ScreenBackground.GameImageContainer.Content;
	const ButtonContainer = splashTester.ScreenBackground.GameButtonContainer.Content;
	const PanelContainer = splashTester.ScreenBackground.GamePanelContainer.Content;

	// DragPanel
	// const DragPanel = GamePanel({
	// 	Size: UDim2.fromOffset(300, 300),
	// 	Position: UDim2.fromScale(0.5, 0.5),
	// 	DragEnabled: true,
	// 	ZIndex: 10,
	// 	OnDragStart: () => print("Drag started!"),
	// 	OnDragEnd: () => print("Drag ended!"),
	// });

	// const DragTarget = GamePanel({
	// 	Size: UDim2.fromOffset(300, 300),
	// 	Position: UDim2.fromScale(0.5, 0.5),
	// 	BackgroundColor3: new Color3(0.2, 0.2, 0.2),
	// 	BackgroundTransparency: 0.5,
	// 	BorderImage: BorderImage.GothicMetal(),
	// });

	// DragPanel.Parent = splashTester.ScreenBackground;

	// TextContainer
	Hydrate(TextContainer)({
		[Fusion.Children]: GameTextExamples.Basic,
	});

	// ImageContainer
	Hydrate(ImageContainer)({
		[Fusion.Children]: GameImageExamples.Basic,
	});

	// ButtonContainer
	Hydrate(ButtonContainer)({
		[Fusion.Children]: GameButtonExamples.Basic,
	});

	// PanelContainer
	Hydrate(PanelContainer)({
		[Fusion.Children]: PanelTests,
	});
};
