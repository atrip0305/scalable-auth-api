import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UsersService } from '../users/users.service'
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async register(email: string, password: string) {

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await this.usersService.createUser(
      email,
      hashedPassword
    )

    return user
  }

  async login(email: string, password: string) {

    const user = await this.usersService.findByEmail(email)

    if (!user) {
      throw new UnauthorizedException()
    }

    const passwordValid = await bcrypt.compare(
      password,
      user.password
    )

    if (!passwordValid) {
      throw new UnauthorizedException()
    }

    const payload = { sub: user.id, email: user.email }

    return {
      access_token: this.jwtService.sign(payload)
    }
  }

}