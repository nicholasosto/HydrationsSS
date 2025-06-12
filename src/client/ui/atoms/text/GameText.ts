import Fusion from "@rbxts/fusion";

export interface GameText {
	Text: Fusion.Value<string | number> | string | number;
	TextSize?: number;
	Size?: UDim2;
	Position?: UDim2;
	AnchorPoint?: Vector2;
	TextColor3?: Color3;
}

function getStringFromStringOrValue(value: string | number | Fusion.Value<string | number>): string {
	const stateobject = value as Fusion.Value<string | number>;
	if (stateobject !== undefined) {
		return tostring(stateobject.get());
	}
	return stateobject;
}

export const GameText = (props: GameText) => {
	const typeCheck = typeOf(props.Text);

	return Fusion.New("TextLabel")({
		Name: "GameText",
		AnchorPoint: props.AnchorPoint ?? new Vector2(0.5, 0.5),
		BackgroundTransparency: 1,
		FontFace: new Font("rbxasset://fonts/families/Inconsolata.json"),
		Position: props.Position ?? UDim2.fromScale(0.5, 0.5),
		Size: props.Size ?? UDim2.fromScale(1, 1),
		TextSize: props.TextSize ?? 24,
		Text: getStringFromStringOrValue(props.Text),
		TextColor3: props.TextColor3 ?? new Color3(1, 1, 1),
		TextScaled: false,
	});
};
