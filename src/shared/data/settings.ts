/// <reference types="@rbxts/types" />
/**
 * @file        settings.ts
 * @module      SettingsDefinitions
 * @layer       Constants
 * @description Canonical list of player settings with metadata and defaults.
 *
 * ╭──────────────────────────────╮
 * │  Soul Steel · Coding Guide   │
 * │  Fusion v4 · Strict TS · ECS │
 * ╰──────────────────────────────╯
 *
 * @author       Trembus
 * @license      MIT
 * @since        0.2.0
 * @lastUpdated  2025-06-15 by Codex – Initial creation
 */

export const SETTING_KEYS = ["music", "chatColor"] as const;
export type SettingKey = (typeof SETTING_KEYS)[number];

export type SettingControlType = "boolean" | "text";

export interface SettingMeta {
        displayName: string;
        description: string;
        controlType: SettingControlType;
}

export const SettingsMeta: Record<SettingKey, SettingMeta> = {
        music: {
                displayName: "Music",
                description: "Toggle background music.",
                controlType: "boolean",
        },
        chatColor: {
                displayName: "Chat Color",
                description: "Preferred chat text color.",
                controlType: "text",
        },
};

export type SettingValue = boolean | string;

export const DefaultSettings: Record<SettingKey, SettingValue> = {
        music: true,
        chatColor: "white",
};
