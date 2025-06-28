import { AttributeKey, AttributesMeta, SettingKey, SettingValue } from "shared";
import { PlayerState } from "../states/PlayerState";

/* ==================================== Button Handlers ================================================= */
// Increment Attribute Handler
export function ModifyPlayerAttribute(attributeKey: AttributeKey, modifier: number): void {
	const attributeMeta = AttributesMeta[attributeKey];
	const currentValue = PlayerState.Attributes[attributeKey].get();
	const newValue = math.clamp(currentValue + modifier, attributeMeta.min, attributeMeta.max); // Assuming max value is 100
	PlayerState.Attributes[attributeKey].set(newValue);
}

// Update Setting Handler
export function UpdatePlayerSetting(key: SettingKey, value: SettingValue): void {
        const state = PlayerState.Settings[key];
        if (state) {
                state.set(value);
        }
}
