/*
 * This component was replaced by `CInfoIcon` which leverages the
 * `GamePanel` atom for consistency. The original implementation is kept
 * here for reference but is no longer compiled.
 */

/*
import Fusion, { New, Children } from "@rbxts/fusion";
import { GameText } from "./text";

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
                                        GameText({
                                                ValueText: props.fusionValue,
                                                AnchorPoint: new Vector2(0.5, 0.5),
                                                Position: UDim2.fromScale(0.5, 0.5),
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
*/
