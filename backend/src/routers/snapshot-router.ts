import { Request, Response, Router } from "express";
import { getSnapshotsForGoal } from "../services/snapshot-service";
import { AppDataSource } from "../database";
import { Snapshot } from "../models/snapshot";
import { Goal } from "../models/goal";

export const snapshotRouter = Router();

snapshotRouter.get("/:goal_id", async (req: Request, res: Response) => {
    const goalId = Number(req.params.goal_id);
    if (Number.isNaN(goalId)) {
        return res.status(400).json({ error: "Invalid goal id" });
    }
    const data = await getSnapshotsForGoal(goalId);
    res.json({ data: data });
});

snapshotRouter.post("/create", async (req: Request, res: Response) => {
    try {
        const snapshotRepository = AppDataSource.getRepository(Snapshot);
        const goalRepo = AppDataSource.getRepository(Goal);

        const goalId = 1;
        // const goalId = Number(req.body.goalId ?? req.body.goal?.id);
        // if (Number.isNaN(goalId)) {
        //     return res.status(400).json({ error: "Invalid goal id" });
        // }

        const goalExists = await goalRepo.findOneBy({ id: goalId });
        if (!goalExists) {
            return res.status(404).json({ error: "Goal not found" });
        }

        // const value = Number(req.body.value ?? req.body.value === 0 ? 0 : req.body.value ?? 500);
        // if (Number.isNaN(value)) {
        //     return res.status(400).json({ error: "Invalid snapshot value" });
        // }

        const date = req.body.date ? new Date(req.body.date) : new Date();

        const newSnapshot = snapshotRepository.create({
            goal: { id: goalId },
            date,
            value: 500,
        });

        const savedSnapshot = await snapshotRepository.save(newSnapshot);

        if (savedSnapshot) {
            return res.status(201).json({
                message: "Snapshot created successfully",
                data: savedSnapshot,
            });
        }
    } catch (error) {
        console.error("Error creating snapshot:", error);
        return res.status(500).json({ error: "Failed to create snapshot" });
    }
});
