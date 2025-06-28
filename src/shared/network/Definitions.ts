// src/shared/network/Definitions.ts
import Net from "@rbxts/net";
import { SettingKey, SettingValue } from "../data/settings";

export const Network = Net.Definitions.Create({
        // fire-and-forget from client → server
        ReportInput: Net.Definitions.ClientToServerEvent<[key: string, value: unknown]>(),

        // server → client
        ProfileChanged: Net.Definitions.ServerToClientEvent<[data: unknown]>(),
        SettingUpdate: Net.Definitions.ServerToClientEvent<[key: SettingKey, value: SettingValue]>(),
});
