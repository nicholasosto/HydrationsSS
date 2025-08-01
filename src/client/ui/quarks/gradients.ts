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

/**
 * Warm sunrise style gradient.
 */
export const SunriseGradient = () =>
	New("UIGradient")({
		Name: "SunriseGradient",
		Color: new ColorSequence([
			new ColorSequenceKeypoint(0, Color3.fromRGB(255, 170, 0)),
			new ColorSequenceKeypoint(0.5, Color3.fromRGB(255, 85, 0)),
			new ColorSequenceKeypoint(1, Color3.fromRGB(128, 0, 128)),
		]),
		Transparency: new NumberSequence(0),
		Rotation: 90,
	});

/**
 * Simple blue gradient useful for backgrounds.
 */
export const OceanGradient = () =>
	New("UIGradient")({
		Name: "OceanGradient",
		Color: new ColorSequence([
			new ColorSequenceKeypoint(0, Color3.fromRGB(0, 170, 255)),
			new ColorSequenceKeypoint(1, Color3.fromRGB(0, 85, 170)),
		]),
		Transparency: new NumberSequence(0),
	});

/**
 * Glass-like glow with transparent center.
 */
export const GlassGradient = () =>
	New("UIGradient")({
		Name: "GlassGradient",
		Color: new ColorSequence([
			new ColorSequenceKeypoint(0, new Color3(1, 1, 1)),
			new ColorSequenceKeypoint(0.5, new Color3(1, 1, 1)),
			new ColorSequenceKeypoint(1, new Color3(1, 1, 1)),
		]),
		Transparency: new NumberSequence([
			new NumberSequenceKeypoint(0, 0.8),
			new NumberSequenceKeypoint(0.5, 0.3),
			new NumberSequenceKeypoint(1, 0.8),
		]),
	});
