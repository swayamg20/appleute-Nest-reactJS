import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthDto } from './dto';
import { JwtService } from '@nestjs/jwt';

import all_data from '../users.json';
//eslint-disable-next-line
const users = require('../users.json');
@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  signInLocal(dto: AuthDto) {
    const user = users.find((_user) => _user.email === dto.email);
    if (!user) throw new UnauthorizedException('Credentials wrong');
    if (user.password !== dto.password)
      throw new UnauthorizedException('Credentials wrong');

    return this.signUser(user.id, user.email, 'user');
  }

  signUser(userId: number, email: string, type: string) {
    return this.jwtService.sign({
      sub: userId,
      email,
      type: type,
    });
  }
}
