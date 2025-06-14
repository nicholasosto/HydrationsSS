/**
 * This file contains helper functions for testing the UI components in the client.
 */

import { Children, Value } from "@rbxts/fusion";
import { GamePanel, GameText } from "../core";

export function CreateTestElement(instance: Frame | ImageLabel | GuiButton, label: string): Frame {
	const Title = GameText({
		ValueText: Value(label),
		Size: UDim2.fromScale(1, 0.05),
		AnchorPoint: new Vector2(0.5, 0),
		Position: UDim2.fromScale(0.5, 0),
	});

	const container = GamePanel({
		Size: instance.Size,
		Children: {
			Title: Title,
			[Children]: instance,
		},
	});
	return container;
}
