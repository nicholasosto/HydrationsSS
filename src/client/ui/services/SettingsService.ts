/// <reference types="@rbxts/types" />
/**
 * @file        SettingsService.ts
 * @module      SettingsService
 * @layer       Client
 * @description Listens for server setting updates and applies them to player state.
 *
 * ╭───────────────────────────────╮
 * │  Soul Steel · Coding Guide    │
 * │  Fusion v4 · Strict TS · ECS  │
 * ╰───────────────────────────────╯
 *
 * @author       Trembus
 * @license      MIT
 * @since        0.2.0
 * @lastUpdated  2025-06-15 by Codex – Initial creation
 */

import { Network } from "shared/network";
import { SettingKey, SettingValue } from "shared/data/settings";
import { PlayerState } from "../states/PlayerState";

export function initializeSettingsService() {
        Network.Client.OnEvent("SettingUpdate", (key: SettingKey, value: SettingValue) => {
                const state = PlayerState.Settings[key];
                if (state) state.set(value);
        });
}
