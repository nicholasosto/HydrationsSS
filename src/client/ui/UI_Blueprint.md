# UI System Blueprint

This document outlines the structure and design principles for the UI system.
It should be updated whenever new components are added or existing ones are
modified.

## Structure

- `atoms/` – basic, reusable primitives
- `quarks/` – styling helpers and utility modules
- `organisms/` – composed UI widgets
- `screens/` – top level screens
- `screens/SoulForge.ts` – manages soul gem sockets and inventory prompts
- `states/` – Fusion state containers
- `hydrations/` – functions that connect data to components

## Principles

1. Components are written in **PascalCase**.
2. Frame-based components use the `Panel` component as the root element.
3. Keep components testable with minimal side effects.

