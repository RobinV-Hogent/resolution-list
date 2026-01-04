import { json } from "body-parser";
import { Router, Request, Response } from "express";
import { goalRouter } from "./goal-router";

export const entryRouter: Router = Router();

entryRouter.get('/', (req: Request, res: Response) => {
    return res.json({'test': 'hey'});
});

entryRouter.use('/goals', goalRouter);