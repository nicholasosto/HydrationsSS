import Fusion, { PropertyTable } from "@rbxts/fusion";
import { MeterState } from "../types/MeterState";

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
	Stroke?: UIStroke; // Optional stroke for the panel
}

/* =============================================== GameText Props ========================================= */
export interface GameTextProps extends PropertyTable<TextLabel> {
	ValueText: Fusion.Value<string | number>;
}

/* =============================================== GameImage Props ========================================= */
export interface GameImageProps extends PropertyTable<ImageLabel> {
	Ratio?: number; // Optional aspect ratio for the image
	ValueText?: Fusion.Value<string | number>; // Optional value text for the image
}

/* =============================================== GameButton Props ========================================= */
export interface GameButtonProps extends PropertyTable<ImageButton> {
	OnClick: () => void; // Function to call when the button is clicked
	Children?: Fusion.ChildrenValue; // Optional children for the button
	HoverImage?: string; // Optional hover image for the button
}
