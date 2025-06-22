import { Players } from "@rbxts/services";
import { New } from "@rbxts/fusion";

const FusionScreen = (name: string, parent: Instance) => {
	wait(0.3);
	let screen = parent.FindFirstChild(name, true) as ScreenGui;
	if (screen === undefined) {
		screen = New("ScreenGui")({
			Name: name,
			ResetOnSpawn: false,
			IgnoreGuiInset: true,
			Enabled: true,
			Parent: parent,
		});
	}
	screen.Parent = Players.LocalPlayer.WaitForChild("PlayerGui") as ScreenGui;
	return screen;
};

const LocalPlayer = Players.LocalPlayer;
const PlayerGui = LocalPlayer.WaitForChild("PlayerGui") as ScreenGui;
const PlayerHUDScreen = FusionScreen("PlayerHUD", PlayerGui);
const PartTestScreen = FusionScreen("PartTest", PlayerGui);
const SoulForgeScreen = FusionScreen("SoulForge", PlayerGui);

export { PartTestScreen, PlayerGui, PlayerHUDScreen, SoulForgeScreen, LocalPlayer };
