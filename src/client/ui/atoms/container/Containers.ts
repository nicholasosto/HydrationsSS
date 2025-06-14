import Fusion, { New } from "@rbxts/fusion";
import { GamePanel } from "../../core/GamePanel";
import { Flex, Layout } from "../../quarks";
import { PlayerAvatar } from "../Avatar";
import { GameText } from "../text";
import { CollapsiblePanel } from "./CollapsiblePanel";
import { Sizes, Positions, Heights } from "./arrangements";

/* ============================================== Interfaces ========================================= */
export interface ContainerProps {
	Children?: Fusion.ChildrenValue;
}

/* ============================================== Container Components ========================================= */

/* Character Card Container */
const CharacterCardContainer = (props: ContainerProps) => {
	// Resource Bars Container
	const barsContainer = GamePanel({
		Size: new UDim2(1, -100, 1, 0),
		FlexInstance: Flex.Grow(),
		Children: {
			...props.Children, // Placeholder for resource bars
		},
		Layout: Layout.VerticleList(2),
	});

	// Component
	const fusionComponent = GamePanel({
		AnchorPoint: new Vector2(0, 0),
		Size: Sizes.CharacterInfoCard,
		Position: Positions.CharacterInfoCard,
		Name: "CharacterCardContainer",
		HoverEffect: true,
		DragEnabled: false,
		Layout: Layout.HorizontalList(5),
		Children: {
			Avatar: PlayerAvatar(),
			ResourceBars: barsContainer, // Placeholder for resource bars
		},
	});

	return fusionComponent;
};

/* Currency Card Container */
const CurrencyCardContainer = (props: ContainerProps) => {
	const Name = "CurrencyCardContainer";
	const DebugLabel = GameText({
		ValueText: Fusion.Value(Name),
		TextSize: 10,
	});
	const containerFrame = GamePanel({
		AnchorPoint: new Vector2(1, 0),
		Size: Sizes.CurrencyCardContainer,
		Position: Positions.CurrencyCardContainer,
		Name: Name,
		HoverEffect: true,
		DragEnabled: false,
		Children: props.Children,
	});

	DebugLabel.Parent = containerFrame; // Add debug label to the container
	return containerFrame;
};

/* Action Bar Container */
const ActionBarContainer = (props: ContainerProps) => {
	const Name = "ActionBarContainer";
	const DebugLabel = GameText({
		ValueText: Fusion.Value(Name),
		TextSize: 10,
	});
	const containerFrame = GamePanel({
		AnchorPoint: new Vector2(0.5, 1),
		Size: Sizes.ActionBarContainer,
		Position: Positions.ActionBar,
		Name: Name,
		HoverEffect: true,
		DragEnabled: true,
		Layout: Layout.HorizontalList(3),
		Children: props.Children,
	});
	DebugLabel.Parent = containerFrame; // Add debug label to the container
	return containerFrame;
};

/* Quest Toggles Container */
const QuestTogglesContainer = (props: ContainerProps) => {
	const Name = "QuestTogglesContainer";
	const DebugLabel = GameText({
		ValueText: Fusion.Value(Name),
		TextSize: 10,
	});
	const containerFrame = CollapsiblePanel({
		title: Name,
	});
	DebugLabel.Parent = containerFrame; // Add debug label to the container
	return containerFrame;
};

/* Menu Bar Container */
const MenuBarContainer = (props: ContainerProps) => {
	const Name = "MenuBarContainer";
	const DebugLabel = GameText({
		ValueText: Fusion.Value(Name),
		TextSize: 10,
	});
	const containerFrame = GamePanel({
		AnchorPoint: new Vector2(0, 0),
		Size: Sizes.MenuBarContainer,
		Position: Positions.MenuBar,
		Name: Name,
		HoverEffect: true,
		DragEnabled: false,
		Layout: Layout.HorizontalList(3),
		Children: props.Children,
	});
	DebugLabel.Parent = containerFrame; // Add debug label to the container
	return containerFrame;
};

export const HUDContainers = {
	CharacterCardContainer,
	CurrencyCardContainer,
	ActionBarContainer,
	QuestTogglesContainer,
	MenuBarContainer,
};
