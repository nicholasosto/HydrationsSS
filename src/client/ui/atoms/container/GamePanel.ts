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

	const component = New("Frame")({
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
	return component;
};
