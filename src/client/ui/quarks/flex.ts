import Fusion, { New, Children } from "@rbxts/fusion";

export const Flex = {
	Grow: () =>
		New("UIFlexItem")({
			Name: "UIFlexItem",
			FlexMode: Enum.UIFlexMode.Grow,
		}),
	Shrink: () =>
		New("UIFlexItem")({
			Name: "UIFlexItem",
			FlexMode: Enum.UIFlexMode.Shrink,
		}),
	None: () =>
		New("UIFlexItem")({
			Name: "UIFlexItem",
			FlexMode: Enum.UIFlexMode.None,
		}),
};
