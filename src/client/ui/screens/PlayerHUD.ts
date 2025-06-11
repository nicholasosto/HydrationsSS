import { Children, Hydrate, Value } from "@rbxts/fusion";
import { PlayerHUDScreen } from "../references";
import { HUDContainers } from "../atoms/container";
import { Pad } from "../quarks";
import { CharacterInfoCard } from "../organisms";

export const FusionHUD = () =>
	Hydrate(PlayerHUDScreen)({
		[Children]: {
			CharacterCardContainer: CharacterInfoCard(),
			CurrencyCardContainer: HUDContainers.CurrencyCardContainer({}),
			ActionBarContainer: HUDContainers.ActionBarContainer({}),
			QuestTogglesContainer: HUDContainers.QuestTogglesContainer({}),
			Pad: Pad.All(new UDim(0, 10)),
		},
	});
