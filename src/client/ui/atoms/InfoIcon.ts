import Fusion, { New, Children, Computed } from "@rbxts/fusion";

export interface InfoIcon {
	assetId: string;
	fusionValue: Fusion.Value<string | number>;
}

export const InfoIcon = (props: InfoIcon) => {
	const component = New("ImageLabel")({
		Name: "ValueImage",
		AnchorPoint: new Vector2(0.5, 0.5),
		BackgroundTransparency: 1,
		Image: props.assetId,
		Position: UDim2.fromScale(0.5, 0.5),
		Size: UDim2.fromOffset(70, 70),

		[Children]: [
			New("Frame")({
				Name: "Frame",
				AnchorPoint: new Vector2(0.5, 1),
				BackgroundColor3: new Color3(),
				BackgroundTransparency: 0.3,
				Position: UDim2.fromScale(0.5, 1),
				Size: UDim2.fromScale(0.9, 0.2),

				[Children]: [
					New("TextLabel")({
						Name: "TextLabel",
						BackgroundTransparency: 1,
						FontFace: new Font(
							"rbxasset://fonts/families/Inconsolata.json",
							Enum.FontWeight.SemiBold,
							Enum.FontStyle.Normal,
						),
						Size: UDim2.fromScale(1, 1),
						TextColor3: Color3.fromRGB(251, 255, 165),
						TextScaled: true,
						Text: Computed(() => tostring(props.fusionValue.get())),
					}),

					New("UICorner")({
						Name: "UICorner",
						CornerRadius: new UDim(0, 4),
					}),
				],
			}),

			New("UIPadding")({
				Name: "UIPadding",
				PaddingBottom: new UDim(0.02, 0),
			}),

			New("UICorner")({
				Name: "UICorner",
			}),

			New("UIStroke")({
				Name: "UIStroke",
				LineJoinMode: Enum.LineJoinMode.Bevel,
				Thickness: 4,
			}),

			New("UIAspectRatioConstraint")({
				Name: "UIAspectRatioConstraint",
			}),
		],
	});
	return component;
};
