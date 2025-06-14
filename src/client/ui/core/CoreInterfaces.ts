import Fusion, { PropertyTable } from "@rbxts/fusion";
import { MeterState } from "../states/MeterState";

/* =============================================== GamePanel Props ========================================= */
export interface GamePanelProps extends PropertyTable<Frame> {
	BorderImage?: ImageLabel; // Optional border image for the panel
	Children?: Fusion.ChildrenValue;
	DragEnabled?: boolean; // Optional drag functionality
	FlexInstance?: UIFlexItem; // Optional flex layout
	HoverEffect?: boolean; // Optional hover effect
	Scrolling?: boolean; // Optional property to enable scrolling
	Layout?: UIListLayout | UIGridLayout; // Optional layout for scrollable children
	Padding?: UIPadding; // Optional padding for the panel
	Gradient?: UIGradient; // Optional gradient for the panel
	Stroke?: UIStroke; // Optional stroke for the panel
	OnDragStart?: () => void; // Optional callback for drag begin
	OnDragEnd?: () => void; // Optional callback for drag end
}

/* =============================================== GameText Props ========================================= */
export interface GameTextProps extends PropertyTable<TextLabel> {
        ValueText?: Fusion.Value<string | number>;
        HoverText?: string | Fusion.Value<string>;
        Variant?: "flat" | "recessed" | "extruded";
}

export interface InfoLabelProps extends GamePanelProps {
        Label: string | Fusion.Value<string>;
        Value: Fusion.Value<string | number>;
        HoverText?: string | Fusion.Value<string>;
        Variant?: "flat" | "recessed" | "extruded";
}

export interface CounterLabelProps extends InfoLabelProps {}

/* =============================================== GameImage Props ========================================= */
export interface GameImageProps extends PropertyTable<ImageLabel> {
	Ratio?: number; // Optional aspect ratio for the image
	ValueText?: Fusion.Value<string | number>; // Optional value text for the image
}
