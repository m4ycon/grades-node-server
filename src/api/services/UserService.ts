import { PrismaClient, User } from '@prisma/client'

class UserService {
  prisma: PrismaClient

  constructor () {
    this.prisma = new PrismaClient()
  }

  async list () {
    return await this.prisma.user.findMany()
  }

  async get (id: string) {
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    })
  }

  async create (user: User) {
    const { name, email } = user

    return await this.prisma.user.create({
      data: {
        name,
        email,
      },
    })
  }

  async update (id: string, user: User) {
    const { name } = user

    return await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        name,
      },
    })
  }

  async delete (id: string) {
    return await this.prisma.user.delete({
      where: {
        id,
      },
    })
  }

  async emailExists (email: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    })
    return user !== null
  }
}

const userService = new UserService()
export default userService
