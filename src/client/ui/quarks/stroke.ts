import Fusion, { New } from "@rbxts/fusion";

export interface StrokeProps {
	Thickness?: Fusion.Computed<number>;
	Color?: Fusion.Computed<Color3>;
}

export const Stroke = (props: StrokeProps) => {
	return New("UIStroke")({
		Name: "Stroke",
		Thickness: props.Thickness ?? 1,
		Color: props.Color ?? new Color3(1, 1, 1),
		ApplyStrokeMode: Enum.ApplyStrokeMode.Border,
	});
};
