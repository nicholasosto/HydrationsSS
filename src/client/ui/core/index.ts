/// <reference types="@rbxts/types" />

/**
 * @file        src/ui/atoms/core/index.ts
 * @module      CoreBarrel
 * @layer       Client/Atom/Core
 * @description Clickable button atom built on `ImageButton`.
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

export * from "./CoreInterfaces";
export * from "./GameButton"; // Clickable button atom built on `ImageButton`.
export * from "./GameImage"; // Lightweight wrapper around `ImageLabel`.
export * from "./GamePanel"; // Foundational Atom that serves as the base of any custom component that would use a Frame object.
export * from "./GameText"; // Styled text label atom.
export { InfoLabel, CounterLabel } from "./GameText";
//export * from "./GameMeter"; // A simple progress bar component.
