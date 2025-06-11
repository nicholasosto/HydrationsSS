import Fusion, { New } from "@rbxts/fusion";

export const Pad = {
	All: (udim: UDim) =>
		New("UIPadding")({
			Name: "PadAll",
			PaddingLeft: udim,
			PaddingRight: udim,
			PaddingTop: udim,
			PaddingBottom: udim,
		}),
	Top: (udim: UDim) =>
		New("UIPadding")({
			Name: "PadTop",
			PaddingTop: udim,
		}),
	Bottom: (udim: UDim) =>
		New("UIPadding")({
			Name: "PadBottom",
			PaddingBottom: udim,
		}),
	Left: (udim: UDim) =>
		New("UIPadding")({
			Name: "PadLeft",
			PaddingLeft: udim,
		}),
	Right: (udim: UDim) =>
		New("UIPadding")({
			Name: "PadRight",
			PaddingRight: udim,
		}),
	LeftRight: (udim: UDim) =>
		New("UIPadding")({
			Name: "PadLeftRight",
			PaddingLeft: udim,
			PaddingRight: udim,
		}),
	TopBottom: (udim: UDim) =>
		New("UIPadding")({
			Name: "PadTopBottom",
			PaddingTop: udim,
			PaddingBottom: udim,
		}),
};
