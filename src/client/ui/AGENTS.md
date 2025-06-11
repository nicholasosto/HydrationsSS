# AGENTS.md

The purpose of this document is to provide addional context and guidelines for AI agents working on the ui components of the project. It is intended to be used in conjunction with the main project documentation.

## 1 - Rules for creating UI components

1. **Use PascalCase for FusionComponents**: All UI components should be named using PascalCase to maintain consistency and readability.
2. **Framebased Components**: All Framebased Components should use the `Panel` component as the root element to ensure proper styling and layout.
3. **All Testable Components**: All components should be designed to be testable, with clear separation of concerns and minimal side effects.
4. **Add example tests to the TestParts Screen**: When creating new components, include example tests in the TestParts screen to demonstrate usage and ensure functionality.

5. **Place any notes for human developers in the `Notes_For_Humans.md` file**: If there are any specific notes or instructions for human developers regarding the component, they should be documented in the `Notes_For_Humans.md` file to provide clarity and context. If that file does not exist, create it in the same directory as the component.

6. **Create a TODO list document in the same directory as the component**: If there are any tasks or improvements needed for the component, create a TODO list document in the same directory to track these items and ensure they are addressed in future updates.

7. **Maintain a UI System blueprint document**: Keep a blueprint document that outlines the structure and design principles of the UI system. This document should be updated as new components are added or existing ones are modified to ensure consistency across the UI.

8. **Review all documentation for contraditions or inconsistencies**: Before finalizing any component, review all related documentation to ensure there are no contradictions or inconsistencies that could lead to confusion or errors in implementation.
