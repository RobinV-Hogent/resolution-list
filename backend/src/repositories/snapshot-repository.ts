import { AppDataSource } from "../database";
import { Snapshot } from "../models/snapshot";

export async function fetchAllSnapshotsForGoal(goal_id: number) {
    return await AppDataSource.getRepository(Snapshot).find({
        where: {
            goal: {id: goal_id}
        },
        order: {
            date: "DESC"
        }
    })
}