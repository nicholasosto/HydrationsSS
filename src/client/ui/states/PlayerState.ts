import { ATTR_KEYS, AttributeKey, AttributesDTO } from "shared/data/attributes";
import Fusion from "@rbxts/fusion";

export interface PlayerState {
	DisplayName: Fusion.Value<string>;
	Level: Fusion.Value<number>;

	Attributes: Record<AttributeKey, Fusion.Value<number>>;
}
