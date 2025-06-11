import Fusion, { New, Children, ChildrenValue, PropertyTable, Hydrate } from "@rbxts/fusion";
import { ReplicatedStorage } from "@rbxts/services";
import { ResourceBarType } from "../types/components";
import { GamePanel } from "../atoms";
import { Layout } from "../quarks";

/* ============================================== Constant(s) ========================================= */
// Template for the resource bar UI component
const ResourceBarTemplate = ReplicatedStorage.WaitForChild("HydrationTemplates") as ResourceBarType;
