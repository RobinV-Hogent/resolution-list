import { Request, Response, Router } from "express";
import { getAllGoals } from "../services/goal-service";
import { AppDataSource } from "../database";
import { Goal } from "../models/goal";

export const goalRouter = Router();

// All goal endpoints come here.


/**
 * @openapi
 * /api/goals:
 *   get:
 *     summary: Retrieves all goals
 *     responses:
 *       '201':
 *         description: All goals
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Goal'
 *       '200':
 *         description: All goals were fetched
 *       '500':
 *         description: Server error
 */
goalRouter.get("/", async (req: Request, res: Response) => {
    const data = await getAllGoals();
    res.json(data);
});



/**
 * @openapi
 * /api/goals/create:
 *   post:
 *     summary: Create a new goal
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               value:
 *                 type: number
 *             required:
 *               - title
 *               - value
 *     responses:
 *       '201':
 *         description: Goal created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Goal'
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
goalRouter.post("/create", async (req: Request, res: Response) => {
    try {
        const goalRepository = AppDataSource.getRepository(Goal);
        const newGoal = goalRepository.create(req.body);

        const savedGoal = await goalRepository.save(newGoal);

        if (savedGoal) {
            return res.status(201).json({
                message: "Goal created successfully",
                data: savedGoal,
            });
        }
    } catch (error) {
        console.error("Error creating goal:", error);
        return res.status(500).json({ error: "Failed to create goal" });
    }
});
