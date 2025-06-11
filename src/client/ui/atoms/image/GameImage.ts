import Fusion from "@rbxts/fusion";
import { GameImageSubKey } from "shared/assets/image";

export interface GameImageProps extends Fusion.PropertyTable<ImageLabel> {
	GameImage: GameImageSubKey;
}

export function GameImage(props: GameImageProps): ImageLabel {
	return Fusion.New("ImageLabel")({
		BackgroundTransparency: 1,
		Image: `${props.GameImage}`,
		Size: new UDim2(1, 0, 1, 0),
		Position: new UDim2(0, 0, 0, 0),
		ZIndex: props.ZIndex ?? 1,
		...props,
	});
}
