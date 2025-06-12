# AGENTS.md

The purpose of this document is to provide addional context and guidelines for AI agents working on the ui components of the project. It is intended to be used in conjunction with the main project documentation.

## 1 - Rules for creating UI components

1. **Use PascalCase for FusionComponents**: All UI components should be named using PascalCase to maintain consistency and readability.
2. **Framebased Components**: All Framebased Components should use the `Panel` component as the root element to ensure proper styling and layout.
3. **All Testable Components**: All components should be designed to be testable, with clear separation of concerns and minimal side effects.
4. **Add example tests to the TestParts Screen**: When creating new components, include example tests in the TestParts screen to demonstrate usage and ensure functionality.

5. **Place any notes for human developers in the `Notes_For_Humans.md` file**: If there are any specific notes or instructions for human developers regarding the component, they should be documented in the `Notes_For_Humans.md` file to provide clarity and context. If that file does not exist, create it in the same directory as the component.

6. **Create a TODO list document in the same directory as the component**: If there are any tasks or improvements needed for the component, create a TODO list document in the same directory to track these items and ensure they are addressed in future updates.

7. **Maintain a UI System blueprint document**: Keep a blueprint document that outlines the structure and design principles of the UI system. This document should be updated as new components are added or existing ones are modified to ensure consistency across the UI.

8. **Review all documentation for contraditions or inconsistencies**: Before finalizing any component, review all related documentation to ensure there are no contradictions or inconsistencies that could lead to confusion or errors in implementation.

## 2 - Game Panel Useage

The Game Panel is a central component in the UI system that serves as the main container for game-related content. It should be used to encapsulate all game-specific UI elements and interactions.

### 2.1 - Game Panel Code

```ts
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

import Fusion, { New, Children, Computed, Value, OnEvent, PropertyTable } from "@rbxts/fusion";
import { GameColors, Layout, ShadowGradient } from "../../quarks";

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

/* =============================================== GamePanel Props ========================================= */
export interface GamePanelProps extends PropertyTable<Frame> {
 Scrolling?: boolean; // Optional property to enable scrolling
 Children?: Fusion.ChildrenValue;
 Layout?: UIListLayout | UIGridLayout; // Optional layout for scrollable children
 HoverEffect?: boolean; // Optional hover effect
 DragEnabled?: boolean; // Optional drag functionality
 FlexInstance?: UIFlexItem; // Optional flex layout
 Padding?: UIPadding; // Optional padding for the panel
 Stroke?: UIStroke; // Optional stroke for the panel
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
```

## 3 - Game Button Usage

### 3.1 - Game Button Code

```ts
/**
 * @file        GameButton.ts
 * @module      GameButton
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
