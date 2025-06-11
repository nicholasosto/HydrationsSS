import { Players } from "@rbxts/services";

const LocalPlayer = Players.LocalPlayer;
const PlayerGui = LocalPlayer.WaitForChild("PlayerGui") as ScreenGui;
const PlayerHUDScreen = PlayerGui.WaitForChild("HUD") as ScreenGui;
const PartTestScreen = PlayerGui.WaitForChild("PartTest") as ScreenGui;

export { PartTestScreen, PlayerGui, PlayerHUDScreen, LocalPlayer };
