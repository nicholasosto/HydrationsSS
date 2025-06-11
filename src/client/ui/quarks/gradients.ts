import Fusion, { New } from "@rbxts/fusion";

export const ShadowGradient = () =>
	New("UIGradient")({
		Name: "ShadowGradient",
		Color: new ColorSequence([
			new ColorSequenceKeypoint(0, new Color3(0, 0, 0)),
			new ColorSequenceKeypoint(0.5, new Color3(0, 0, 0)),
			new ColorSequenceKeypoint(1, new Color3(0, 0, 0)),
		]),
		Transparency: new NumberSequence([
			new NumberSequenceKeypoint(0, 0.5),
			new NumberSequenceKeypoint(0.5, 0.5),
			new NumberSequenceKeypoint(1, 0.5),
		]),
		Rotation: 90,
		Offset: new Vector2(0, 0.5),
	});

export const OldShadowGradient = () =>
	New("UIGradient")({
		Name: "ContainerGradientTransparent",
		Color: new ColorSequence([
			new ColorSequenceKeypoint(0, new Color3()),
			new ColorSequenceKeypoint(0.0813149, Color3.fromRGB(21, 21, 21)),
			new ColorSequenceKeypoint(1, new Color3(1, 1, 1)),
		]),
		Transparency: new NumberSequence([
			new NumberSequenceKeypoint(0, 0),
			new NumberSequenceKeypoint(1, 0.625, 0.1875),
		]),
	});
