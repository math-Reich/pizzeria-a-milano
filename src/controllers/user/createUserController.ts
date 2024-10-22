import { Request, response, Response } from "express";
import { CreateUserServ } from "../../services/users/createUserService";

class CreateUserController
{
    async handle(req: Request, res: Response)
    {
        const {name, email, password} = req.body

        const createUserService = new CreateUserServ()
        const user = await createUserService.execute({name, email, password})

        res.json(user)
        return
    }
}

export {CreateUserController}