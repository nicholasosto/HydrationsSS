import Fusion from "@rbxts/fusion";

export interface GameText {
	Text: string;
	TextSize?: number;
	Size?: UDim2;
	Position?: UDim2;
	AnchorPoint?: Vector2;
	TextColor3?: Color3;
}

export const GameText = (props: GameText) => {
	return Fusion.New("TextLabel")({
		Name: "GameText",
		AnchorPoint: props.AnchorPoint ?? new Vector2(0.5, 0.5),
		BackgroundTransparency: 1,
		FontFace: new Font("rbxasset://fonts/families/Inconsolata.json"),
		Position: props.Position ?? UDim2.fromScale(0.5, 0.5),
		Size: props.Size ?? UDim2.fromScale(1, 1),
		TextSize: props.TextSize ?? 24,
		Text: props.Text,
		TextColor3: props.TextColor3 ?? new Color3(1, 1, 1),
		TextScaled: false,
	});
};
