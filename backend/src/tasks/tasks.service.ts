import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class TasksService {

  constructor(private prisma: PrismaService) {}

  create(userId: string, data: any) {
    return this.prisma.task.create({
      data: {
        ...data,
        userId
      }
    })
  }

  findAll(user: any) {

    if (user.role === 'ADMIN') {
      return this.prisma.task.findMany()
    }

    return this.prisma.task.findMany({
      where: { userId: user.userId }
    })
  }

  findOne(id: string) {
    return this.prisma.task.findUnique({
      where: { id }
    })
  }

  update(id: string, data: any) {
    return this.prisma.task.update({
      where: { id },
      data
    })
  }

  remove(id: string) {
    return this.prisma.task.delete({
      where: { id }
    })
  }

}