import Fusion, { Value } from "@rbxts/fusion";
import { GameText, GameTextProps } from "./GameText";

export interface TitleTextProps extends GameTextProps {
	TitleText?: Value<string> | string;
}

const TitleTextDefaultProps: TitleTextProps = {
	Name: "TitleText",
	TextSize: 32,
	TextColor3: new Color3(0.85, 0.42, 0.42),
	TextStrokeColor3: new Color3(0.1, 0.1, 0.1),
	TextStrokeTransparency: 0.5,
	Position: UDim2.fromScale(0.5, 0.5),
	AnchorPoint: new Vector2(0.5, 0.5),
	TitleText: "Title",
};

export const TitleText = (props: TitleTextProps) => {
	return GameText({
		Name: props.Name ?? TitleTextDefaultProps.Name,
		Text: props.TitleText ?? TitleTextDefaultProps.TitleText,
		TextSize: props.TextSize ?? TitleTextDefaultProps.TextSize,
		TextColor3: props.TextColor3 ?? TitleTextDefaultProps.TextColor3,
		TextStrokeColor3: props.TextStrokeColor3 ?? TitleTextDefaultProps.TextStrokeColor3,
		TextStrokeTransparency: props.TextStrokeTransparency ?? TitleTextDefaultProps.TextStrokeTransparency,
		Size: props.Size ?? UDim2.fromScale(1, 1),

		Position: props.Position ?? TitleTextDefaultProps.Position,
		AnchorPoint: props.AnchorPoint ?? TitleTextDefaultProps.AnchorPoint,
	});
};
