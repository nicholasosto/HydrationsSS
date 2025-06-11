import Fusion, { Children, Hydrate, New } from "@rbxts/fusion";
import { PartTestScreen } from "./ui/references";
import { GameText } from "./ui/atoms";
import { Panel } from "./ui/atoms/container/ShadowPanel";
import {
	ActionBarContainer,
	CurrencyCardContainer,
	QuestTogglesContainer,
	CharacterCardContainer,
} from "./ui/atoms/container/Containers";


const ShadowPanelTests = {
	CharacterCardContainer: CharacterCardContainer({}),
	CurrencyContainer: CurrencyCardContainer({}),
	ActionBarContainer: ActionBarContainer({ }),
	QuestPanel: QuestTogglesContainer({}),
};

Hydrate(PartTestScreen)({
	[Children]: {
		Padding: New("UIPadding")({
			PaddingTop: new UDim(0, 10),
			PaddingBottom: new UDim(0, 10),
			PaddingLeft: new UDim(0, 10),
			PaddingRight: new UDim(0, 10),
		}),
		ContainerTests: ShadowPanelTests,
	},
});
