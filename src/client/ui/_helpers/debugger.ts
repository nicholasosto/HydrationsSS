import { OnChange, Value } from "@rbxts/fusion";

const infoMessages: Value<string[]> = Value([]);
const warnMessages: Value<string[]> = Value([]);

export function logInfo(message: string) {
	infoMessages.get().push(message);
	print(`Info: ${message}`);
}

export function logWarn(message: string) {
	warnMessages.get().push(message);
	warn(`Warning: ${message}`);
}

export function clearLogs() {
	infoMessages.set([]);
	warnMessages.set([]);
	print("Logs cleared.");
}

export function getInfoLogs(): string[] {
	return infoMessages.get();
}

export function getWarnLogs(): string[] {
	return warnMessages.get();
}
