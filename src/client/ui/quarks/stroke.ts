import Fusion, { New } from "@rbxts/fusion";

export const Stroke = {
	Default: () =>
		New("UIStroke")({
			Name: "UIStroke",
			Color: new Color3(1, 1, 1),
			Thickness: 1,
			LineJoinMode: Enum.LineJoinMode.Bevel,
			Transparency: 0.3,
		}),
	Hover: () =>
		New("UIStroke")({
			Name: "UIStroke",
			Color: new Color3(1, 1, 1),
			Thickness: 1,
			LineJoinMode: Enum.LineJoinMode.Bevel,
			Transparency: 0.2,
		}),
};
