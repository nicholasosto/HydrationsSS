import Fusion from "@rbxts/fusion";

export const enum MeterType {
	Bar = "Bar",
	Radial = "Radial",
}

export interface MeterProps {
	/** Current value – will be clamped between `min` and `max`. */
	value: Fusion.Value<number>;
	min?: number; // default 0
	max?: number; // default 100
	/** If true, shows a label such as “75 / 100”. */
	showLabel?: boolean;
	/** Fusion children passed through to the root Frame (e.g. extra UI effects). */
	Children?: Fusion.ChildrenValue;
}
