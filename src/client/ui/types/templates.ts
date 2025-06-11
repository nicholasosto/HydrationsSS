import { ReplicatedStorage } from "@rbxts/services";
import { ResourceBarType } from "./components/ResourceBar";

/* ============================================== Constant(s) ========================================= */
// Template for the resource bar UI component
const ResourceBarTemplate = ReplicatedStorage.WaitForChild("HydrationTemplates") as ResourceBarType;
