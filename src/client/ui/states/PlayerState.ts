import { ATTR_KEYS, AttributeKey } from "shared/data/attributes";
import { SETTING_KEYS, SettingKey, SettingValue, DefaultSettings } from "shared/data/settings";
import Fusion, { OnChange } from "@rbxts/fusion";

interface PlayerState {
        DisplayName: Fusion.Value<string>;
        Level: Fusion.Value<number>;

        Attributes: Record<AttributeKey, Fusion.Value<number>>;

        Settings: Record<SettingKey, Fusion.Value<SettingValue>>;
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

        Settings: SETTING_KEYS.reduce(
                (acc, key) => {
                        acc[key] = Fusion.Value(DefaultSettings[key]);
                        return acc;
                },
                {} as Record<SettingKey, Fusion.Value<SettingValue>>,
        ),
};
