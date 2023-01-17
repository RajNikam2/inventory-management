import { Module } from '@nestjs/common';
import { TeamMemberService } from './team-member.service';
import { TeamMemberController } from './team-member.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamMember } from './team-member.entity';

@Module({
  imports:[TypeOrmModule.forFeature([TeamMember])],
  controllers: [TeamMemberController],
  providers: [TeamMemberService],
  exports:[TeamMemberService]
})
export class TeamMemberModule {}
