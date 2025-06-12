/**
 * @file        GamePanel.ts
 * @module      GamePanel
 * @layer       Client/Atom
 * @description Core(Foundational Atom that serves as the base of any custom component that would use a Frame object).
 * There are additional properties that can be used to customize the component, such as scrolling, hover effects, drag functionality, and more.
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
 *
 * @remarks
 *   Uses them  from shared/quarks.ts.
 */

import Fusion, { New, Children, Computed, Value, OnEvent } from "@rbxts/fusion";
import { GameColors, Layout, ShadowGradient } from "../quarks";
import { GamePanelProps } from "../interfaces/CoreInterfaces";

/* =============================================== Scroll Component ========================================= */
function ScrollContent(children: Fusion.ChildrenValue, layout?: UIListLayout | UIGridLayout) {
	return New("ScrollingFrame")({
		Name: "ScrollContent",
		BackgroundTransparency: 0.8,
		BackgroundColor3: GameColors.BackgroundDefault,
		Size: UDim2.fromScale(1, 1),
		Position: UDim2.fromScale(0, 0),
		ScrollBarThickness: 2,
		ScrollBarImageColor3: GameColors.ScrollBar,
		ScrollBarImageTransparency: 0.5,
		[Children]: {
			Layout: layout ?? Layout.Grid(10, UDim2.fromOffset(100, 100)),
			...children,
		},
	});
}

/* =============================================== Content Component ========================================= */
function Content(children: Fusion.ChildrenValue, layout?: UIListLayout | UIGridLayout) {
	return New("Frame")({
		Name: "Content",
		BackgroundTransparency: 1,
		Size: UDim2.fromScale(1, 1),
		Position: UDim2.fromScale(0, 0),
		[Children]: {
			Layout: layout ?? [],
			...children,
		},
	});
}

/* =============================================== GamePanel Component ========================================= */
export const GamePanel = (props: GamePanelProps) => {
	// Hover State
	const isHovered = Value(false);

	// Stroke Color and Thickness
	const strokeColor = Computed(() => {
		return isHovered.get() && props.HoverEffect ? GameColors.StrokeHover : GameColors.StrokeDefault;
	});

	// Stroke Thickness
	const strokeThickness = Computed(() => {
		return isHovered.get() ? 1.4 : 0.9;
	});

	// Content (Scrollable or not)
	const content = props.Scrolling
		? ScrollContent(props.Children ?? {}, props.Layout)
		: Content(props.Children ?? {}, props.Layout);

	const customComponent = New("Frame")({
		Name: props.Name ?? "ShadowPanel",
		AnchorPoint: props.AnchorPoint ?? new Vector2(0.5, 0.5),
		BackgroundColor3: props.BackgroundColor3 ?? GameColors.BackgroundDefault,
		BackgroundTransparency: props.BackgroundTransparency ?? 0.2,
		Position: props.Position ?? UDim2.fromScale(0.5, 0.5),
		Size: props.Size ?? UDim2.fromScale(0.5, 0.5),
		LayoutOrder: props.LayoutOrder ?? 1,
		[OnEvent("MouseEnter")]: () => isHovered.set(true),
		[OnEvent("MouseLeave")]: () => isHovered.set(false),
		[Children]: {
			Gradient: ShadowGradient(),
			BorderImage: props.BorderImage ?? undefined,
			Corner: New("UICorner")({}),
			Flex: props.FlexInstance ?? undefined,
			Dragger: New("UIDragDetector")({
				Enabled: props.DragEnabled ?? false,
			}),
			Padding:
				props.Padding ??
				New("UIPadding")({
					PaddingTop: new UDim(0, 2),
					PaddingBottom: new UDim(0, 2),
					PaddingLeft: new UDim(0, 2),
					PaddingRight: new UDim(0, 2),
				}),
			Stroke:
				props.Stroke ??
				New("UIStroke")({
					Name: "UIStroke",
					Color: strokeColor,
					Thickness: strokeThickness,
					LineJoinMode: Enum.LineJoinMode.Bevel,
				}),
			Content: content,
		},
	});
	return customComponent;
};
