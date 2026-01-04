import { fetchAllSnapshotsForGoal } from "../repositories/snapshot-repository";

export async function getSnapshotsForGoal(goal_id: number) {
    return await fetchAllSnapshotsForGoal(goal_id)
} 