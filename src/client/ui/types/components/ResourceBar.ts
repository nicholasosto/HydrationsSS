export type ResourceBarType = Frame & {
	BackgroundTexture: ImageLabel & {
		Frame: Frame;
	};
	DisplayLabel: TextLabel;
	Foreground: Frame & {
		UIGradient: UIGradient;
		ImageLabel: ImageLabel;
	};
	Hydrations: Configuration & {
		FillBar: ObjectValue;
		FillBarGradient: ObjectValue;
		DisplayTextLabel: ObjectValue;
	};
	CasingFrame: ImageLabel;
};
