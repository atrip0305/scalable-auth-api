import { Controller, Get, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from './auth/jwt.guard'
import { RolesGuard } from './auth/roles.guard'
import { Roles } from './auth/roles.decorator'

@Controller()
export class AppController {

  @Get()
  getHello() {
    return { message: "API running" }
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile() {
    return { message: "Protected route works" }
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Get('admin')
  adminRoute() {
    return { message: "Admin route accessed" }
  }

}