export type SplashTesterType = ScreenGui & {
	ScreenBackground: Frame & {
		UIListLayout: UIListLayout;
		GameTextContainer: Frame & {
			Content: ScrollingFrame;
		};
		GameImageContainer: Frame & {
			Content: ScrollingFrame;
		};
		GameButtonContainer: Frame & {
			Content: ScrollingFrame;
		};
		GamePanelContainer: Frame & {
			Content: ScrollingFrame;
		};
	};
};
