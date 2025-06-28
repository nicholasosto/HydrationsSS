/// <reference types="@rbxts/types" />
/**
 * @file        SettingListItem.ts
 * @module      SettingListItem
 * @layer       Client/Molecule
 * @description Displays a single user setting with controls.
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
 *
 * @dependencies
 *   @rbxts/fusion ^0.4.0
 */

import Fusion, { New, Value, Computed, OnEvent } from "@rbxts/fusion";
import { GamePanel, GameText } from "../core";
import { Layout } from "../quarks";
import { SettingsMeta, SettingKey } from "shared/data/settings";
import { PlayerState } from "../states/PlayerState";

export interface SettingListItemProps {
        SettingKey: SettingKey;
        UserId: Fusion.Value<number>;
}

export const SettingListItem = (props: SettingListItemProps) => {
        const meta = SettingsMeta[props.SettingKey];
        const state = PlayerState.Settings[props.SettingKey];

        const displayValue = Computed(() => {
                const value = state.get();
                return meta.controlType === "boolean" ? (value ? "On" : "Off") : tostring(value);
        });

        const input = meta.controlType === "text"
                ? New("TextBox")({
                                Text: state.get() as string,
                                Size: UDim2.fromScale(1, 0.4),
                                BackgroundTransparency: 0.5,
                                [OnEvent("FocusLost")]: (enter) => {
                                        if (enter) state.set((input as TextBox).Text);
                                },
                        })
                : undefined;

        return GamePanel({
                Name: "SettingListItem",
                Size: UDim2.fromOffset(250, meta.controlType === "text" ? 90 : 70),
                Layout: Layout.VerticleList(2),
                Children: {
                        NameLabel: GameText({
                                ValueText: Value(meta.displayName),
                                TextXAlignment: Enum.TextXAlignment.Left,
                        }),
                        TypeLabel: GameText({
                                ValueText: Value(`Type: ${meta.controlType}`),
                                TextSize: 14,
                                TextXAlignment: Enum.TextXAlignment.Left,
                        }),
                        DescLabel: GameText({
                                ValueText: Value(meta.description),
                                TextSize: 14,
                                TextXAlignment: Enum.TextXAlignment.Left,
                        }),
                        CurrentValue: GameText({
                                ValueText: displayValue as unknown as Fusion.Value<string | number>,
                                TextSize: 14,
                                TextXAlignment: Enum.TextXAlignment.Left,
                        }),
                        Input: input,
                },
        });
};
