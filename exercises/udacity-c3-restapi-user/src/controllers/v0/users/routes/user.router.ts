import { Router, Request, Response } from 'express';

import { User } from '../models/User';
import { AuthRouter, requireAuth } from './auth.router';

const router: Router = Router();

router.use('/auth', AuthRouter);

router.get('/', async (req: Request, res: Response) => {
    res.status(200).send("users/root");
});

router.get('/:id', async (req: Request, res: Response) => {
    let { id } = req.params;
    const item = await User.findByPk(id);

    if (!item) {
        return res.status(404).send("user not found");
    }

    res.status(200).send(item);
});

export const UserRouter: Router = router;