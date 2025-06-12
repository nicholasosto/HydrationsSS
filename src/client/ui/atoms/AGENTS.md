# AGENTS.md - Core UI Components

This file outlines usage tips for the foundational UI atoms `GamePanel`, `GameButton`, `GameText` and `GameImage`.

## Usage Guidelines

1. **PascalCase** – Import and use the components with PascalCase names.
2. **Panel as Root** – When building frame based widgets, use `GamePanel` as the base container. It provides padding, optional scrolling and hover effects.
3. **GameButton** – A clickable `ImageButton` that can display a `GameText` label and forwards the `Activated` event via the `OnClick` prop.
4. **GameText** – Simple `TextLabel` helper. Pass a plain string or a Fusion `Value` for the `Text` prop.
5. **GameImage** – Lightweight image atom for displaying assets from `shared/assets`.

Keep components composable and testable. Add notes in `Notes_For_Humans.md` and track outstanding work in `TODO.md` files within each folder.
