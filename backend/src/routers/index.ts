import { json } from "body-parser";
import { Router, Request, Response } from "express";
import { resolutionRouter } from "./resolutions";

export const entryRouter: Router = Router();

entryRouter.get('/', (req: Request, res: Response) => {
    return res.json({'test': 'hey'});
});

entryRouter.use('/resolutions', resolutionRouter);