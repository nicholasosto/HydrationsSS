/// <reference types="@rbxts/types" />
/**
 * @file        CollapsiblePanel.ts
 * @module      CollapsiblePanel
 * @layer       Molecule
 * @description Animated drop-down / accordion panel.
 * ╭───────────────────────────────╮
 * │  Soul Steel · Coding Guide    │
 * │  Fusion v4 · Strict TS · ECS  │
 * ╰───────────────────────────────╯
 */
import Fusion, { New, Children, Value, Computed, OnEvent, Hydrate } from "@rbxts/fusion";
import { GameImage, GamePanel } from "client/ui/core";
import { GameImages } from "shared/assets/image";

// ---------- Public props ----------
export interface CollapsiblePanelProps {
	title: string;
	/** True ⇒ starts expanded. *(default: true)* */
	defaultOpen?: boolean;
	/** Animation time (sec). *(default = 0.25)* */
	duration?: number;
	/** Called whenever the open state toggles. */
	onToggle?: (open: boolean) => void;
	/** Children to render inside the panel body. */
	[Children]?: Fusion.ChildrenValue;
}

// ---------- Component ----------
export const CollapsiblePanel = (props: CollapsiblePanelProps) => {
	const { Spring } = Fusion; // convenient alias

	/* ----- State ----- */
	const isOpen = Value(props.defaultOpen ?? true);
	const openTarget = Computed(() => (isOpen.get() ? 1 : 0));
	const progress = Spring(openTarget, 30, 1);

	/* ----- Derived values ----- */
	// 0 → 0 px height, 1 → auto (preferred height)
	const bodySize = Computed(() => UDim2.fromScale(1, progress.get()));

	const iconRotation = Computed(
		() => new Vector3(0, 0, progress.get() * math.rad(90)), // chevron flips
	);

	const bodyTransparency = Computed(
		() => 1 - progress.get(), // fade in
	);

	/* ----- Template ----- */
	return GamePanel({
		Name: string.gsub(props.title, "%s+", "")[0],
		Size: UDim2.fromScale(1, 0), // height governed by child UIListLayout
		AutomaticSize: Enum.AutomaticSize.Y,
		[Children]: {
			// Header
			Header: New("TextButton")({
				Text: props.title,
				TextScaled: true,
				BackgroundTransparency: 1,
				Size: UDim2.fromScale(1, 0.08),
				[OnEvent("Activated")]: () => {
					isOpen.set(!isOpen.get());
					props.onToggle?.(isOpen.get());
				},
				[Children]: {
					// Toggle chevron
					Chevron: GameImage({
						Image: GameImages.Control.TrippleArrow,
					}),
				},
			}),

			// Body
			Body: New("Frame")({
				Name: "Body",
				Size: bodySize,
				BackgroundTransparency: 1,
				ClipsDescendants: true,
				[Children]: {
					// Content holder
					ContentHolder: New("Frame")({
						Size: UDim2.fromScale(1, 1),
						BackgroundTransparency: bodyTransparency,
						[Children]: props[Children],
					}),
				},
			}),
		},
	});
};
