import { SplashTesterType } from "../types";
import { PlayerGui } from "../references";
import Fusion, { Children, Hydrate, Value } from "@rbxts/fusion";
import { BorderImage, GameButton, GameImage, GamePanel, GameText } from "../core";
import { CreateTestElement } from "../_helpers/testHelpers";
import { GameImages } from "shared/assets/image";
import { Layout } from "../quarks";
import { CollapsiblePanel } from "../atoms";
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
	const ContainerFrame = splashTester.ScreenBackground;
	const TextContainer = ContainerFrame.GameTextContainer.Content;
	const ImageContainer = ContainerFrame.GameImageContainer.Content;
	const ButtonContainer = ContainerFrame.GameButtonContainer.Content;
	const PanelContainer = ContainerFrame.GamePanelContainer.Content;

	// Screen
	Hydrate(splashTester)({
		[Children]: {
			Collapse: CollapsiblePanel({
				title: "Game UI Components",
				defaultOpen: true,
				onToggle: (open) => {
					print(`CollapsiblePanel is now ${open ? "open" : "closed"}`);
				},
			}),
		},
	});

	// ContainerFrame
	Hydrate(ContainerFrame)({
		[Children]: {
			BGChildren: [],
		},
	});

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
