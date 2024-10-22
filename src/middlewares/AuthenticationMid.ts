import { Response, Request, NextFunction } from "express"
import { verify } from "jsonwebtoken"

interface PayLoad
{
    sub: string
}


export function authenticationMiddleware(req: Request, res: Response, next: NextFunction)
{
    const authToken = req.headers.authorization

    if(!authToken)
    {
        res.status(401).end()
        return
    }

    const [, token] = authToken.split(" ")

    try {
        const {sub} = verify(token, process.env.JWT_SECRET) as PayLoad
        req.user_id = sub
        
        next()
        return
        
    } catch(err)
    {
        res.status(401).end()
        return
    }
}