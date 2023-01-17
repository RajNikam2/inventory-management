import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TeamMemberService } from 'src/team-member/team-member.service';

@Injectable()
export class AuthService {
  constructor(
    private teamMemberService: TeamMemberService,
    private jwtService:JwtService
    ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.teamMemberService.findByUserName(username);
    if (user && user.password === password) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, userId: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}