import Fusion, { Children, OnEvent } from "@rbxts/fusion";
import { GameText } from "../text";

export interface GameButtonProps extends Fusion.PropertyTable<GuiButton> {
	OnClick: () => void;
	SelectedState?: Fusion.Value<boolean>;
	EnabledState?: Fusion.Value<boolean>;
	Text?: string;
	Image?: string;
}

export const GameButton = (props: GameButtonProps) => {
	const isHovered = Fusion.Value(false);
	const isSelected = props.SelectedState ?? Fusion.Value(false);
	const isEnabled = props.EnabledState ?? Fusion.Value(true);
	const buttonText = props.Text ?? "Click Me";
	const buttonImage = props.Image ?? "";

	const component = Fusion.New("ImageButton")({
		Size: props.Size ?? new UDim2(0, 100, 0, 100),
		Position: props.Position ?? new UDim2(0, 0, 0, 0),
		AnchorPoint: props.AnchorPoint ?? new Vector2(0.5, 0.5),
		[Children]: {
			Label: props.Text ? GameText({ Text: buttonText }) : undefined,
			Content: props[Children] ?? undefined,
		},
		Image: buttonImage,
		[OnEvent("Activated")]: props.OnClick,
	});
	return component;
};

export const Samples = {
	GameButton: GameButton({
		Name: "SampleGameButton",
		Size: new UDim2(0, 200, 0, 50),
		Position: new UDim2(0.5, -100, 0.5, -25),
		OnClick: () => {
			print("Sample Game Button Clicked");
		},
		Text: "Sample Button",
		Image: "rbxassetid://123456789", // Replace with a valid asset ID
	}),
	GameButtonWithChildren: GameButton({
		Name: "SampleGameButtonWithChildren",
		Size: new UDim2(0, 200, 0, 50),
		Position: new UDim2(0.5, -100, 0.5, 25),
		OnClick: () => {
			print("Sample Game Button with Children Clicked");
		},
		Text: "Button with Children",
		Image: "rbxassetid://123456789", // Replace with a valid asset ID
		[Children]: {
			Icon: Fusion.New("ImageLabel")({
				Size: new UDim2(0, 24, 0, 24),
				Position: new UDim2(0, 10, 0, 10),
				Image: "rbxassetid://987654321", // Replace with a valid asset ID
				BackgroundTransparency: 1,
			}),
		},
	}),
};
