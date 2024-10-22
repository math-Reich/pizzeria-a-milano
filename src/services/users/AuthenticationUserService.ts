import prismaClient from "../../prisma"
import { compare } from "bcryptjs"
import { sign } from 'jsonwebtoken'

interface LogInRequest
{
    email: string
    password: string
}

class AuthenticationUserService
{
    async execute({email, password}: LogInRequest)
    {
        const user = await prismaClient.user.findFirst({where:{email: email}})
        
        if(!user)
        {
            throw new Error("Email not found")
        }

        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch)
        {
            throw new Error("Incorrect password")
        }

        const token = sign(
            {
                name: user.name,
                email: user.email
            }, 
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '30d'
            }
        )

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            toke: token
        }
    }
}

export {AuthenticationUserService}