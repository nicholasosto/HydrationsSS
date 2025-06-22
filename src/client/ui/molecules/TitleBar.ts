import Fusion, { New } from "@rbxts/fusion";
import { GameText, GamePanel, GameButton } from "../core";
import { GameImages } from "shared/assets/image";
import { IconButton } from "../atoms/buttons/IconButton";
import { t } from "@rbxts/t";

export type TitleBarType = Frame & {
	TitleText: TextLabel;
	CloseButton: ImageButton;
};

export interface TitleBarProps {
	Text: string;
	Name?: string;
	FusionEnabled?: Fusion.Value<boolean>;
}

/* =============================================== BaseScreen Component: Title Bar ==================================================== */
export const TitleBar = (props: TitleBarProps) => {
	const text = props.Text ?? "Game Window";

	const component = GamePanel({
		Name: "TitleBar",
		Size: new UDim2(1, 0, 0, 50),
		Position: new UDim2(0, 0, 0, 0),
		AnchorPoint: new Vector2(0, 0),
		BackgroundTransparency: 1,
		Children: {
			TitleText: GameText({
				Name: "TitleText",
				ValueText: Fusion.Value(text),
				Size: new UDim2(1, 0, 1, 0),
				AnchorPoint: new Vector2(0, 0),
				Position: UDim2.fromScale(0, 0),
				TextXAlignment: Enum.TextXAlignment.Center,
				TextYAlignment: Enum.TextYAlignment.Center,
			}),
			CloseButton: IconButton({
				Name: "CloseButton",
				Icon: GameImages.Control.Close,
				ToggleValue: props.FusionEnabled ?? Fusion.Value(true),
				Size: new UDim2(0, 30, 0, 30),
				Position: UDim2.fromScale(1, 0.5),
				AnchorPoint: new Vector2(1, 0.5),
				BackgroundTransparency: 1,
			}),
		},
	});

	return component as TitleBarType;
};
