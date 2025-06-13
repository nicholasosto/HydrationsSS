/* Replicate Child */
export function ReplicateChild(child: Instance, parent: Instance, count: number): Array<Instance> {
	const replicatedChild = child.Clone();
	const currentCount = 0;
	const replicatedChildren: Array<Instance> = [];
	while (currentCount < count) {
		replicatedChild.Name = `${child.Name} ${currentCount}`;
		replicatedChild.Parent = parent;
		replicatedChildren.push(replicatedChild.Clone());
	}
	return replicatedChildren;
}
