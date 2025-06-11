import Fusion from "@rbxts/fusion";

export type FusionResource = {
	Name: Fusion.Value<string>;
	Current: Fusion.Value<number>;
	Max: Fusion.Value<number>;
	Color: Fusion.Value<Color3>;
	Icon: Fusion.Value<ImageLabel>;
};
