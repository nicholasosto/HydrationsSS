// src/server/services/ProfileService.ts
import ProfileService from "@rbxts/profileservice";

const DATASTORE_NAME = "SoulSteelPlayerProfile";

export interface PlayerProfile {
	xp: number;
	gems: number;
	slots: number;
	attributes: Record<string, number>;
}

export const Profiles = ProfileService.GetProfileStore<PlayerProfile>(DATASTORE_NAME, {
	xp: 0,
	gems: 0,
	slots: 1,
	attributes: {},
});

export function loadProfile(player: Player) {
	const profile = Profiles.LoadProfileAsync(`Player_${player.UserId}`);
	if (!profile) player.Kick("Data failed to load!");
	return profile!;
}
