import Fusion from "@rbxts/fusion";

export type CooldownState = {
	Duration: Fusion.Value<number>;
	TimeLeft: Fusion.Value<number>;
	Percent: Fusion.Computed<number>;
};

export const createCooldownState = (duration: number): CooldownState => {
	const state: Partial<CooldownState> = {};
	state.Duration = Fusion.Value(duration);
	state.TimeLeft = Fusion.Value(duration);
	state.Percent = Fusion.Computed(() => {
		const t = state.TimeLeft!.get();
		const d = state.Duration!.get();
		return d > 0 ? math.clamp(t / d, 0, 1) : 0;
	});
	return state as CooldownState;
};
