import { ReplicatedStorage } from "@rbxts/services";
import { ResourceBarType } from "./components/ResourceBar";
const HydrationTemplates = ReplicatedStorage.WaitForChild("HydrationTemplates");
/* ============================================== Constant(s) ========================================= */
// Template for the resource bar UI component
export const ResourceBarTemplate = HydrationTemplates.WaitForChild("ResourceBar") as ResourceBarType;
