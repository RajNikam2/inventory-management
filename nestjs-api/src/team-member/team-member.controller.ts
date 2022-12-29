import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { TeamMemberDto } from "./team-member.dto";
import { TeamMember } from "./team-member.entity";
import { TeamMemberService } from "./team-member.service";

@Controller('teamMember')
export class TeamMemberController {
  constructor(
    private readonly TeamMemberService: TeamMemberService
  ) { }

  @Get()
  public listAll(@Paginate() query: PaginateQuery): Promise<Paginated<TeamMember>> {
    return this.TeamMemberService.listAll(query);
  }

  @Get('/:id')
  async listById(@Param('id') teamMemberId: number) {
    return this.TeamMemberService.listTeamMemberById(teamMemberId);
  }

  @Post('create')
  async create(@Body() teamMemberData: TeamMemberDto): Promise<any> {
    return this.TeamMemberService.create(teamMemberData);
  }

  @Patch('update/:id')
  async update(@Param('id') id, @Body() teamMemberData: TeamMemberDto): Promise<any> {
    return this.TeamMemberService.update(id, teamMemberData);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id): Promise<any> {
    return this.TeamMemberService.delete(id);
  }
}

