/// <reference types="@rbxts/types" />
/**
 * @file        ItemSlot.ts
 * @module      ItemSlot
 * @layer       Client/Molecule
 * @description Inventory slot with icon and quantity.
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

export interface ItemSlotProps {
    Icon: string;
    Quantity: Fusion.Value<number>;
}

export const ItemSlot = (props: ItemSlotProps) => {
    return GamePanel({
        Name: "ItemSlot",
        Size: UDim2.fromOffset(60, 60),
        Children: {
            Icon: New("ImageLabel")({
                BackgroundTransparency: 1,
                Image: props.Icon,
                Size: UDim2.fromScale(1, 1),
            }),
            Count: New("TextLabel")({
                BackgroundTransparency: 1,
                Text: Fusion.Computed(() => tostring(props.Quantity.get())),
                TextStrokeTransparency: 0.5,
                TextScaled: true,
                Size: UDim2.fromScale(0.9, 0.3),
                Position: UDim2.fromScale(0.05, 0.65),
                TextXAlignment: Enum.TextXAlignment.Left,
            }),
        },
    });
};
