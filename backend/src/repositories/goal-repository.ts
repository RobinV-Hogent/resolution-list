import { AppDataSource } from "../database";
import { Goal } from "../models/goal";

export async function fetchAllGoals() {
    return await AppDataSource.getRepository(Goal).find();
}