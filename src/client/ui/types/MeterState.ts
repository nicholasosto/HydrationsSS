import Fusion from "@rbxts/fusion";

export type MeterState = {
	// The unique identifier for the meter
	Id: Fusion.Value<string>;
	Label: Fusion.Value<string>;
	// The current value of the meter
	CurrentValue: Fusion.Value<number>;
	// The maximum value of the meter
	MaxValue: Fusion.Value<number>;

	PercentProgress: Fusion.Computed<number>;
};

export const createMeterState = (id: string, label: string, currentValue: number, maxValue: number): MeterState => {
	const meterState: MeterState = {
		Id: Fusion.Value(id),
		Label: Fusion.Value(label),
		CurrentValue: Fusion.Value(currentValue),
		MaxValue: Fusion.Value(maxValue),
		PercentProgress: Fusion.Computed(() => {
			const current = meterState.CurrentValue.get();
			const max = meterState.MaxValue.get();
			return max > 0 ? current / max : 0;
		}),
	};

	return meterState;
};

export const MeterStates = {
	TestHealth:() => createMeterState("TestHealth", "Health", 70, 100),
	TestMana: createMeterState("TestMana", "Mana", 50, 100),
	TestStamina: createMeterState("TestStamina", "Stamina", 30, 100),
	TestExperience: createMeterState("TestExperience", "Experience", 200, 1000),
	TestEnergy: createMeterState("TestEnergy", "Energy", 80, 100),
	TestHunger: createMeterState("TestHunger", "Hunger", 40, 100),
	TestThirst: createMeterState("TestThirst", "Thirst", 60, 100),
};
