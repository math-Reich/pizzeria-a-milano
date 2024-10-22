import { Response, Request } from "express";
import { AuthenticationUserService } from "../../services/users/AuthenticationUserService";

class AuthenticationUserController
{
    async handle(req: Request, res: Response)
    {
        const {email, password} = req.body
        const loginUserServ = new AuthenticationUserService()

        const logIn = await loginUserServ.execute({email, password})

        res.json(logIn)
        return
    }
}

export {AuthenticationUserController}