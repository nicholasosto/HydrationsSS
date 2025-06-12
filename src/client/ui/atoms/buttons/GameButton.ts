import Fusion, { Children, OnEvent, Value } from "@rbxts/fusion";
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
			Label: props.Text ? GameText({ Text: Value(props.Text) }) : undefined,
			Content: props[Children] ?? undefined,
		},
		Image: buttonImage,
		[OnEvent("Activated")]: props.OnClick,
	});
	return component;
};
