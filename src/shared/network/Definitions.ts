// src/shared/network/Definitions.ts
import Net from "@rbxts/net";

export const Network = Net.Definitions.Create({
	// fire-and-forget from client → server
	ReportInput: Net.Definitions.ClientToServerEvent<[key: string, value: unknown]>(),

	// server → client
	ProfileChanged: Net.Definitions.ServerToClientEvent<[data: unknown]>(),
});
