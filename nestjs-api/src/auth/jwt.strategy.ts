import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';
import { AuthService } from './auth.service';
import { TeamMemberDto } from 'src/team-member/team-member.dto';
import { Any } from 'typeorm';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) { 
  constructor(private readonly authService: AuthService) { 
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),//
      ignoreExpiration: false,          
      secretOrKey: jwtConstants.secret, 
    });
  }

async validate(payload: any) {       
    return { username: payload.username,role:"admin" }
  }

}