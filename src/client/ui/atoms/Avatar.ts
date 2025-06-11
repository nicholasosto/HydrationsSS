import { Players } from "@rbxts/services";
import { New, Children, PropertyTable } from "@rbxts/fusion";
import { SliceFrame } from "../quarks";

interface AvatarProps extends PropertyTable<ImageLabel> {
	id: number; // User ID for the avatar
}

const Avatar = (props: AvatarProps) => {
	return New("ImageLabel")({
		Name: "Avatar",
		Size: UDim2.fromScale(1, 1), // Full size
		BackgroundTransparency: 1,
		Image: Players.GetUserThumbnailAsync(props.id, Enum.ThumbnailType.HeadShot, Enum.ThumbnailSize.Size100x100)[0],
		[Children]: {
			Aspect: New("UIAspectRatioConstraint")({
				AspectRatio: 1,
				DominantAxis: Enum.DominantAxis.Height,
			}),
			SizeConstraint: New("UISizeConstraint")({
				MaxSize: new Vector2(100, 100), // Limit size to 100x100
				MinSize: new Vector2(80, 80), // Ensure it doesn't shrink below 80x80
			}),
			SliceFrame: SliceFrame.Clone(),
		},
	});
};

export function PlayerAvatar() {
	return Avatar({
		id: Players.LocalPlayer.UserId, // Use the local player's UserId
	});
}
