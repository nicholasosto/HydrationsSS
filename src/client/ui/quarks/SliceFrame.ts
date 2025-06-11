import { New } from "@rbxts/fusion";
export const SliceFrame = New("ImageLabel")({
	Name: "AvatarFrameImage",
	AnchorPoint: new Vector2(0.5, 0.5),
	BackgroundTransparency: 1,
	Image: "rbxassetid://134322739825066",
	ImageRectOffset: new Vector2(30, 30),
	ImageRectSize: new Vector2(960, 960),
	Position: UDim2.fromScale(0.5, 0.5),
	ScaleType: Enum.ScaleType.Slice,
	Size: UDim2.fromScale(1, 1),
	SliceCenter: new Rect(500, 500, 500, 500),
	ZIndex: 100,
});
