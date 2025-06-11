// import { Children, Hydrate } from "@rbxts/fusion";
// import { PartTestScreen } from "./ui/references";
// import { HUDContainers } from "./ui/atoms/container/Containers";
// import { Pad } from "./ui/quarks";

// const { CharacterCardContainer, CurrencyCardContainer, ActionBarContainer, QuestTogglesContainer } = HUDContainers;

// const ShadowPanelTests = {
// 	CharacterCardContainer: CharacterCardContainer({}),
// 	CurrencyContainer: CurrencyCardContainer({}),
// 	ActionBarContainer: ActionBarContainer({}),
// 	QuestPanel: QuestTogglesContainer({}),
// };

// Hydrate(PartTestScreen)({
// 	[Children]: {
// 		Padding: Pad.All(new UDim(0, 10)),
// 		ContainerTests: ShadowPanelTests,
// 	},
// });

import { FusionHUD } from "./ui";

FusionHUD();
