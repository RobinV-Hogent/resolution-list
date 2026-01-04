import { fetchAllGoals } from "../repositories/goal-repository";

export async function getAllGoals() {
    return await fetchAllGoals();
}