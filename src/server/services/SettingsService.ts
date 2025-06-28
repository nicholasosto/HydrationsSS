/// <reference types="@rbxts/types" />
/**
 * @file        SettingsService.ts
 * @module      SettingsService
 * @layer       Server
 * @description Manages player settings and replicates them to clients.
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
import { SettingKey, SettingValue, DefaultSettings } from "shared/data/settings";

const playerSettings = new Map<Player, Record<SettingKey, SettingValue>>();

export function loadSettings(player: Player) {
        const settings = { ...DefaultSettings };
        playerSettings.set(player, settings);
        for (const [key, value] of pairs(settings)) {
                Network.Server.Get("SettingUpdate").SendToPlayer(player, key as SettingKey, value as SettingValue);
        }
}

export function updatePlayerSetting(player: Player, key: SettingKey, value: SettingValue) {
        const settings = playerSettings.get(player);
        if (settings) {
                settings[key] = value;
                Network.Server.Get("SettingUpdate").SendToPlayer(player, key, value);
        }
}
