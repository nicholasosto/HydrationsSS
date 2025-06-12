import Fusion from "@rbxts/fusion";

export type MeterState = {
	// The unique identifier for the meter
	Id: Fusion.Value<string>;
	// The current value of the meter
	CurrentValue: Fusion.Value<number>;
	// The maximum value of the meter
	MaxValue: Fusion.Value<number>;

	PercentProgress: Fusion.Computed<number>;
};

export const createMeterState = (id: string, currentValue: number, maxValue: number): MeterState => {
	const meterState: MeterState = {
		Id: Fusion.Value(id),
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
