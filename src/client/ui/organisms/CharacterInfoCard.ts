import { ResourceBarType } from "../types/components";
import { ResourceBarTemplate } from "../types";
import { HUDContainers } from "../atoms";
import { Hydrate } from "@rbxts/fusion";

/* ============================================== Organism ========================================= */

export const CharacterInfoCard = () => {
	const organism = HUDContainers.CharacterCardContainer({
		Children: {
			HealthBar: ResourceBarTemplate.Clone(), // Placeholder for resource bars
			ManaBar: ResourceBarTemplate.Clone(), // Placeholder for resource bars
			StaminaBar: ResourceBarTemplate.Clone(), // Placeholder for resource bars
		},
	});

	return organism;
};
