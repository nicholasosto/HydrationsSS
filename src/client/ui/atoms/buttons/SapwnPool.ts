import { GameButton, GameButtonProps } from "client/ui/core";

export const SapwnPoolButton = () =>
	GameButton({
		Name: "SapwnPoolButton",
		Size: UDim2.fromOffset(100, 50),
		Position: UDim2.fromScale(0.5, 0.5),
		OnClick: () => {
			print("Spawning Pool Button Clicked!");
			// Here you would typically call a function to interact with the SpawningPool
			// For example: SpawningPool.spawn();
		},
	});
