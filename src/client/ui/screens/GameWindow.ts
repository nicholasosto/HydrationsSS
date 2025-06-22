import Fusion, { Children, Computed } from "@rbxts/fusion";
import { Players } from "@rbxts/services";
import { GamePanel } from "../core/GamePanel";
import { TitleBar, TitleBarType } from "../molecules";

export type GameWindowType = ScreenGui & {
	TitleBar: TitleBarType;
	Content: Frame;
};

export interface GameWindowProps {
	Name: string;
	Parent?: Instance;
	Title?: string;
	DragEnabled?: boolean;
	AnchorPoint?: Vector2;
	Position?: UDim2;
	ContainerSize?: UDim2;
	Children?: Fusion.ChildrenValue;
}

export const GameWindow = (screenProps: GameWindowProps) => {
	const parent = (screenProps.Parent as ScreenGui) ?? (Players.LocalPlayer.WaitForChild("PlayerGui") as ScreenGui);
	const ScreenActive = Fusion.Value(true);
	const ContainerSize = screenProps.ContainerSize ?? UDim2.fromOffset(800, 600);

	// Screen Creation
	const screen = Fusion.New("ScreenGui")({
		Name: screenProps.Name,
		ResetOnSpawn: false,
		IgnoreGuiInset: true,
		Enabled: Computed(() => ScreenActive.get()),
		Parent: parent,
		[Fusion.Children]: {
			Main: GamePanel({
				Name: "MainContainer",
				Size: ContainerSize,
				Position: screenProps.Position ?? UDim2.fromScale(0.5, 0.5),
				AnchorPoint: screenProps.AnchorPoint ?? new Vector2(0.5, 0.5),
				DragEnabled: screenProps.DragEnabled ?? false,
				Children: {
					TitleBar: TitleBar({
						Name: "TitleBar",
						FusionEnabled: ScreenActive,
						Text: screenProps.Title ?? "Game Window",
					}),
					Content: screenProps.Children ?? {},
				},
			}),
		},
	});

	return screen as GameWindowType;
};
