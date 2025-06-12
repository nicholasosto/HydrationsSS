import { Pad } from "client/ui/quarks";
import { GamePanel } from "../container";
import { GameText } from "../text/GameText";
import { GameImage, GameImageProps } from "./GameImage";
import Fusion, { Children, Computed } from "@rbxts/fusion";

export interface ValueImageProps extends GameImageProps {
	Value: Fusion.Value<number | string>;
}

export const ValueImage = (props: ValueImageProps): Frame => {
	// Compute the text string from the Value property
	const textString = Computed(() => tostring(props.Value.get()));
	const container = GamePanel({
		Size: UDim2.fromScale(1, 1),
		Padding: Pad.All(new UDim(0, 4)),
		Children: {
			Image: GameImage({ Image: props.Image, Size: UDim2.fromScale(1, 1) }),
			Label: GameText({ Text: textString.get() }),
		},
	});

	return container;
};
