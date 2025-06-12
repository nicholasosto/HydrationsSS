import Fusion from "@rbxts/fusion";
import { GamePanel } from "../../core/GamePanel";
import { Flex, Layout } from "../../quarks";
import { PlayerAvatar } from "../Avatar";

/* ============================================== Constants ========================================= */
const Heights = {
	Padding: 10,
	CharacterInfoHeight: 100,
	MenuBar: 50,
	QuestPanel: 300,
	ActionBar: 100,
	CurrencyCard: 86,
};
const Sizes = {
	CharacterInfoCard: new UDim2(0, 350, 0, Heights.CharacterInfoHeight),
	CurrencyCardContainer: new UDim2(0, 180, 0, Heights.CurrencyCard),
	ActionBarContainer: new UDim2(0, 450, 0, Heights.ActionBar),
	QuestPanel: new UDim2(0, 300, 0, Heights.QuestPanel),
	MenuBarContainer: new UDim2(0, 300, 0, Heights.MenuBar),
};
const Positions = {
	CharacterInfoCard: new UDim2(0, 0, 0, 0),
	CurrencyCardContainer: new UDim2(1, 0, 0, 0),
	MenuBar: new UDim2(0, 0, 0, Heights.CharacterInfoHeight + Heights.Padding),
	QuestPanel: new UDim2(0, 0, 0, Heights.CharacterInfoHeight + Heights.Padding * 2 + Heights.MenuBar),
	ActionBar: new UDim2(0.5, 0, 1, 0),
};

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
	const containerFrame = GamePanel({
		AnchorPoint: new Vector2(1, 0),
		Size: Sizes.CurrencyCardContainer,
		Position: Positions.CurrencyCardContainer,
		Name: "CurrencyCardContainer",
		HoverEffect: true,
		DragEnabled: false,
		Children: props.Children,
	});
	return containerFrame;
};

/* Action Bar Container */
const ActionBarContainer = (props: ContainerProps) => {
	const containerFrame = GamePanel({
		AnchorPoint: new Vector2(0.5, 1),
		Size: Sizes.ActionBarContainer,
		Position: Positions.ActionBar,
		Name: "ActionBarContainer",
		HoverEffect: true,
		DragEnabled: true,
		Layout: Layout.HorizontalList(3),
		Children: props.Children,
	});
	return containerFrame;
};

/* Quest Toggles Container */
const QuestTogglesContainer = (props: ContainerProps) => {
	const containerFrame = GamePanel({
		AnchorPoint: new Vector2(0, 0),
		Size: Sizes.QuestPanel,
		Position: Positions.QuestPanel,
		Name: "QuestTogglesContainer",
		HoverEffect: true,
		DragEnabled: false,
		Layout: Layout.VerticleList(),
		Children: props.Children,
	});
	return containerFrame;
};

/* Menu Bar Container */
const MenuBarContainer = (props: ContainerProps) => {
	const containerFrame = GamePanel({
		AnchorPoint: new Vector2(0, 0),
		Size: Sizes.MenuBarContainer,
		Position: Positions.MenuBar,
		Name: "MenuBarContainer",
		HoverEffect: true,
		DragEnabled: false,
		Layout: Layout.HorizontalList(3),
		Children: props.Children,
	});
	return containerFrame;
};

export const HUDContainers = {
	CharacterCardContainer,
	CurrencyCardContainer,
	ActionBarContainer,
	QuestTogglesContainer,
	MenuBarContainer,
};
