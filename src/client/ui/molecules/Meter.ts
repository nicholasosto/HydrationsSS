import Fusion from "@rbxts/fusion";
import { MeterState } from "../types/MeterState";
import { GameTextProps } from "../interfaces";
import { GamePanel } from "../atoms/container";

export interface MeterProps {
	MeterState: MeterState;
	DisplayLabel?: GameTextProps;
}
export const Meter = (props: MeterProps) => {
	const { MeterState, DisplayLabel } = props;
	const customComponent = GamePanel({
		HoverEffect: true,
		Children: {
			FillBar: [],
			Background: [],
		},
	});
};
