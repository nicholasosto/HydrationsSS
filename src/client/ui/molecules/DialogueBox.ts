/// <reference types="@rbxts/types" />
/**
 * @file        DialogueBox.ts
 * @module      DialogueBox
 * @layer       Client/Molecule
 * @description Simple panel for displaying dialogue text.
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

import Fusion, { New } from "@rbxts/fusion";
import { GamePanel } from "../core";

export interface DialogueBoxProps {
    Speaker: string;
    Message: Fusion.Value<string>;
}

export const DialogueBox = (props: DialogueBoxProps) => {
    return GamePanel({
        Name: "DialogueBox",
        Size: UDim2.fromOffset(300, 100),
        Children: {
            Speaker: New("TextLabel")({
                BackgroundTransparency: 1,
                FontFace: new Font("rbxasset://fonts/families/Inconsolata.json"),
                Text: props.Speaker,
                TextSize: 18,
                Position: UDim2.fromScale(0.05, 0),
                Size: UDim2.fromScale(0.9, 0.3),
                TextXAlignment: Enum.TextXAlignment.Left,
            }),
            Message: New("TextLabel")({
                BackgroundTransparency: 1,
                FontFace: new Font("rbxasset://fonts/families/SourceSansPro.json"),
                TextWrapped: true,
                Text: Fusion.Computed(() => props.Message.get()),
                TextSize: 16,
                Position: UDim2.fromScale(0.05, 0.35),
                Size: UDim2.fromScale(0.9, 0.6),
                TextXAlignment: Enum.TextXAlignment.Left,
                TextYAlignment: Enum.TextYAlignment.Top,
            }),
        },
    });
};
