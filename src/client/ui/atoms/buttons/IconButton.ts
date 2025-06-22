import Fusion from "@rbxts/fusion";
import { GameImages } from "shared/assets/image";

export interface IconButtonProps {
	Icon: string;
	Name?: string;
	OnClick?: () => void;
	ToggleValue?: Fusion.Value<boolean>;
	Size?: UDim2;
	Position?: UDim2;
	AnchorPoint?: Vector2;
	BackgroundTransparency?: number;
	LayoutOrder?: number;
	ZIndex?: number;
	Children?: Fusion.ChildrenValue;
}

export const IconButton = (props: IconButtonProps) => {
	// Set default values for optional properties
	props.Name = props.Name ?? "IconButton";
	props.Icon = props.Icon ?? GameImages.Control.TrippleArrow; // Default icon, replace with a valid ID
	props.Size = props.Size ?? new UDim2(0, 30, 0, 30);
	props.Position = props.Position ?? UDim2.fromScale(0.5, 0.5);
	props.AnchorPoint = props.AnchorPoint ?? new Vector2(0.5, 0.5);
	props.BackgroundTransparency = props.BackgroundTransparency ?? 1;
	props.LayoutOrder = props.LayoutOrder ?? 1;
	props.ZIndex = props.ZIndex ?? 1;
	props.ToggleValue = props.ToggleValue ?? Fusion.Value(false);

	// Create the IconButton component
	return Fusion.New("ImageButton")({
		Name: props.Name,
		Image: props.Icon,
		Size: props.Size,
		Position: props.Position,
		AnchorPoint: props.AnchorPoint,
		BackgroundTransparency: props.BackgroundTransparency,
		LayoutOrder: props.LayoutOrder,
		ZIndex: props.ZIndex,

		[Fusion.OnEvent("Activated")]: () => {
			props.OnClick?.();
			props.ToggleValue?.set(!props.ToggleValue.get());
			print("INFO: IconButton clicked:", props.Name, "Toggle Value:", props.ToggleValue?.get());
		},
	});
};
