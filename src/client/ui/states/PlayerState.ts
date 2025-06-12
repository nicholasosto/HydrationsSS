import { ATTR_KEYS, AttributeKey, AttributesDTO } from "shared/data/attributes";
import Fusion, { OnChange } from "@rbxts/fusion";

interface PlayerState {
	DisplayName: Fusion.Value<string>;
	Level: Fusion.Value<number>;

	Attributes: Record<AttributeKey, Fusion.Value<number>>;
}

export const PlayerState: PlayerState = {
	DisplayName: Fusion.Value(""),
	Level: Fusion.Value(1),

	Attributes: ATTR_KEYS.reduce(
		(acc, key) => {
			acc[key] = Fusion.Value(10); // Default value for each attribute
			return acc;
		},
		{} as Record<AttributeKey, Fusion.Value<number>>,
	),
};
