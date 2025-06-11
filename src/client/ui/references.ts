import { Players } from "@rbxts/services";

const LocalPlayer = Players.LocalPlayer;
const PlayerGui = LocalPlayer.WaitForChild("PlayerGui") as ScreenGui;
const PlayerHUD = PlayerGui.WaitForChild("HUD") as ScreenGui;
const PartTestScreen = PlayerGui.WaitForChild("PartTest") as ScreenGui;

export { PartTestScreen, PlayerGui, PlayerHUD, LocalPlayer };
