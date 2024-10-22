import prismaClient from "../../prisma"
import { hash } from "bcryptjs"

interface UserRequest
{
    name: string
    email: string
    password: string
}

class CreateUserServ
{
    async execute({name, email, password}: UserRequest)
    {
        if(!email)
        {
            throw new Error("incorrect email")
        }

        const userExists = await prismaClient.user.findFirst({where: {email: email}})

        if(userExists)
        {
            throw new Error("User exists already")
        }

        const passwordHash = await hash(password, 13)

        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash
            },
            select: {
                id: true,
                name: true,
                email: true,
                created_at: true
            }
        })

        return user
    }
}

export {CreateUserServ}