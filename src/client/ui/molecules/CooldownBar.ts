/// <reference types="@rbxts/types" />
/**
 * @file        CooldownBar.ts
 * @module      CooldownBar
 * @layer       Client/Molecule
 * @description Displays ability cooldown progress.
 *
 * ╭───────────────────────────────╮
 * │  Soul Steel · Coding Guide    │
 * │  Fusion v4 · Strict TS · ECS  │
 * ╰───────────────────────────────╯
 *
 * @author       Trembus
 * @license      MIT
 * @since        0.2.0
 * @lastUpdated  2025-05-29 by Luminesa – Initial creation
 *
 * @dependencies
 *   @rbxts/fusion ^0.4.0
 */

import Fusion, { New, Children, Computed } from "@rbxts/fusion";
import { GamePanel } from "../core";

export interface CooldownBarProps {
    Label: string;
    Progress: Fusion.Value<number>; // 0 to 1
}

export const CooldownBar = (props: CooldownBarProps) => {
    const fillSize = Computed(() => UDim2.fromScale(math.clamp(props.Progress.get(), 0, 1), 1));

    return GamePanel({
        Name: "CooldownBar",
        Size: UDim2.fromOffset(200, 20),
        Children: {
            Fill: GamePanel({
                Name: "Fill",
                BackgroundColor3: new Color3(0.8, 0.2, 0.2),
                Size: fillSize,
                Position: UDim2.fromScale(0, 0),
            }),
            Label: New("TextLabel")({
                Name: "Label",
                BackgroundTransparency: 1,
                Text: props.Label,
                Size: UDim2.fromScale(1, 1),
            }),
        },
    });
};
