# AGENTS.md

The purpose of this document is to provide a concise overview of coding conventions, testing practices, and agent directives for the Soul Steel project. It serves as a quick reference for developers and LLM or AGI's to ensure consistency and quality in their contributions.

## 1 Follow Coding Conventions

1. Use PascalCase for FusionComponents.
2. Section modules with spanning comment blocks.

## 2 General Workflow

1. **Follow coding conventions** in this guide.
2. Ensure folders contain barrel files for easy imports. Check existing folders and ensure barrel files are present and correctly exporting components.

## 3 Pitfalls to Avoid

1. Fusions OnEvent, OnChange follow the format:

```ts
    MyComponent({
    ...otherProps,
    [OnEvent("EventName")]: (eventData) => {
        // Handle event
    },
    [OnChange("PropertyName")]: (newValue) => {
        // Handle property change
    },
})
```

## 4 Code Header Style

*Prepend the full TSDoc header template (see Appendix A) whenever you create a new `.ts` file.*

```ts
/// <reference types="@rbxts/types" />

/**
 * @file        HealthBarAtom.ts
 * @module      HealthBarAtom
 * @layer       Atom
 * @description Fusion atom that renders a segmented health bar for characters.
 *
 * ╭───────────────────────────────╮
 * │  Soul Steel · Coding Guide    │
 * │  Fusion v4 · Strict TS · ECS  │
 * ╰───────────────────────────────╯
 *
 * @author       Trembus
 * @license      MIT
 * @since        0.2.0
 * @lastUpdated  2025-05-29 by Luminesa – Initial creation
 *
 * @dependencies
 *   @rbxts/fusion ^0.4.0
 *
 * @remarks
 *   Uses theme colors from shared/theme.ts.
 */

import Fusion from "@rbxts/fusion";
import { theme } from "shared/theme";
// …component code…
```