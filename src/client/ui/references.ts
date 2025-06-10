import { Players } from "@rbxts/services";

const LocalPlayer = Players.LocalPlayer;
const PlayerGui = LocalPlayer.WaitForChild("PlayerGui") as ScreenGui;
const HUD = PlayerGui.WaitForChild("HUD") as ScreenGui;
