/// <reference types="@rbxts/types" />

/**
 * @file        SoulForge.ts
 * @module      SoulForge
 * @layer       Screen
 * @description Screen GUI for managing soul gems.
 *
 * ╭───────────────────────────────╮
 * │  Soul Steel · Coding Guide    │
 * │  Fusion v4 · Strict TS · ECS  │
 * ╰───────────────────────────────╯
 *
 * @author       Trembus
 * @license      MIT
 * @since        0.1.0
 * @lastUpdated  2025-06-10 by Trembus – Initial creation
 */

import Fusion, { Children, Hydrate, New, OnEvent, Value, Computed } from "@rbxts/fusion";
import { SoulForgeScreen } from "../references";
import { GamePanel } from "../atoms/container";
import { Layout, PanelSizes } from "../quarks";
import { GameButton } from "../atoms";

/* ============================================== Types ============================================== */
const Slots = ["Physical", "Pantheon", "FightingStyle", "SpecialAbility"] as const;
type Slot = (typeof Slots)[number];

/* ============================================== Components ============================================== */
export const SoulForge = () => {
	const showPrompt = Value(false);
	const showInventory = Value(false);
	const selectedSlot = Value<Slot | undefined>(undefined);

	function openPrompt(slot: Slot) {
		selectedSlot.set(slot);
		showPrompt.set(true);
	}

	const promptComponent = Computed(() => {
		const slot = selectedSlot.get();
		if (!slot || !showPrompt.get()) return undefined;
		return SlotPrompt(slot);
	});

	const inventoryComponent = Computed(() => {
		const slot = selectedSlot.get();
		if (!slot || !showInventory.get()) return undefined;
		return InventoryModal(slot);
	});

	const socketContainer = GamePanel({
		Name: "SocketContainer",
		AnchorPoint: new Vector2(0.5, 0.5),
		Position: UDim2.fromScale(0.5, 0.5),
		Size: UDim2.fromOffset(450, 250),
		Layout: Layout.Grid(10, UDim2.fromOffset(100, 100)),
		Children: {
			Physical: GameButton({
				Name: "PhysicalSocket",
				Size: UDim2.fromOffset(100, 100),
				OnClick: () => openPrompt("Physical"),
			}),
			Pantheon: GamePanel({
				Name: "PantheonSocket",
				//[OnEvent("Activated")]: () => openPrompt("Pantheon"),
			}),
			Fighting: GamePanel({
				Name: "FightingStyleSocket",
				//[OnEvent("Activated")]: () => openPrompt("FightingStyle"),
			}),
			Ability: GamePanel({
				Name: "SpecialAbilitySocket",
				//[OnEvent("Activated")]: () => openPrompt("SpecialAbility"),
			}),
		},
	});

	return Hydrate(SoulForgeScreen)({
		[Children]: {
			Sockets: socketContainer,
			Prompt: promptComponent,
			Inventory: inventoryComponent,
		},
	});

	/* ================================ Local Component Functions ================================== */
	function SlotPrompt(slot: Slot) {
		return GamePanel({
			Name: "SlotPrompt",
			AnchorPoint: new Vector2(0.5, 0.5),
			Position: UDim2.fromScale(0.5, 0.5),
			Size: UDim2.fromOffset(220, 140),
			Children: {
				Label: New("TextLabel")({
					Text: `Manage ${slot} Slot`,
					BackgroundTransparency: 1,
					Size: UDim2.fromOffset(200, 20),
				}),
				Modify: New("TextButton")({
					Text: "Modify",
					Size: UDim2.fromOffset(180, 24),
					Position: new UDim2(0, 10, 0, 30),
					[OnEvent("Activated")]: () => {
						showPrompt.set(false);
					},
				}),
				Swap: New("TextButton")({
					Text: "Swap",
					Size: UDim2.fromOffset(180, 24),
					Position: new UDim2(0, 10, 0, 60),
					[OnEvent("Activated")]: () => {
						showPrompt.set(false);
						showInventory.set(true);
					},
				}),
				Cancel: New("TextButton")({
					Text: "Cancel",
					Size: UDim2.fromOffset(180, 24),
					Position: new UDim2(0, 10, 0, 90),
					[OnEvent("Activated")]: () => showPrompt.set(false),
				}),
			},
		});
	}

	function InventoryModal(slot: Slot) {
		const gems: Record<string, Frame> = {};
		for (let i = 0; i < 16; i++) {
			gems[`Gem${i}`] = GamePanel({
				Size: UDim2.fromOffset(80, 80),
				Name: `${slot}Gem${i}`,
			});
		}
		return GamePanel({
			Name: "InventoryModal",
			AnchorPoint: new Vector2(0.5, 0.5),
			Position: UDim2.fromScale(0.5, 0.5),
			Size: PanelSizes.ModalPanel(),
			Scrolling: true,
			Layout: Layout.Grid(4, UDim2.fromOffset(90, 90)),
			//[OnEvent("Activated")]: () => {},
			Children: gems,
		});
	}
};
