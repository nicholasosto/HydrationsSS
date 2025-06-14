import Fusion, { New } from "@rbxts/fusion";
import { GamePanel } from "../../core/GamePanel";
import { Flex, Layout } from "../../quarks";
import { PlayerAvatar } from "../Avatar";
import { GameText } from "../text";
import { CollapsiblePanel } from "./CollapsiblePanel";

/* ============================================== Constants ========================================= */
// Heights
export const Heights = {
	Padding: 10,
	CharacterInfoHeight: 100,
	MenuBar: 50,
	QuestPanel: 300,
	ActionBar: 100,
	CurrencyCard: 86,
};

// Sizes
export const Sizes = {
	CharacterInfoCard: new UDim2(0, 350, 0, Heights.CharacterInfoHeight),
	CurrencyCardContainer: new UDim2(0, 180, 0, Heights.CurrencyCard),
	ActionBarContainer: new UDim2(0, 450, 0, Heights.ActionBar),
	QuestPanel: new UDim2(0, 300, 0, Heights.QuestPanel),
	MenuBarContainer: new UDim2(0, 300, 0, Heights.MenuBar),
};

// Positions
export const Positions = {
	CharacterInfoCard: new UDim2(0, 0, 0, 0),
	CurrencyCardContainer: new UDim2(1, 0, 0, 0),
	MenuBar: new UDim2(0, 0, 0, Heights.CharacterInfoHeight + Heights.Padding),
	QuestPanel: new UDim2(0, 0, 0, Heights.CharacterInfoHeight + Heights.Padding * 2 + Heights.MenuBar),
	ActionBar: new UDim2(0.5, 0, 1, 0),
};
