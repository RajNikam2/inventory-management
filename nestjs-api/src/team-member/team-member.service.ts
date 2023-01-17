import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterOperator, paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { TeamMemberDto } from "./team-member.dto";
import { TeamMember } from "./team-member.entity";


@Injectable()
export class TeamMemberService {
    constructor(
        @InjectRepository(TeamMember) private teamMemberRepository: Repository<TeamMember>
    ) { }

    public listAll(query: PaginateQuery): Promise<Paginated<TeamMember>> {
        return paginate(query, this.teamMemberRepository, {
            sortableColumns: ['last_name', 'first_name', 'position', 'assigned_territories', 'country', 'notes',],
            relations: ['country'],
            defaultSortBy: [['id', 'ASC'], ['last_name', 'ASC'], ['first_name', 'ASC'],
            ['country', 'ASC'],],
            searchableColumns: ['last_name', 'first_name', 'position', 'assigned_territories', 'country','notes','createdAt','updatedAt'],
            filterableColumns: {
                'country.name': [FilterOperator.EQ]
            }
        })
    }

    async findByUserName({ username }: any): Promise<TeamMemberDto> {
        return await this.teamMemberRepository.findOne({
            where: { username }
        });
    }

    async listTeamMemberById(id: any) {
        return this.teamMemberRepository.findOne({
            where: { id: id },
            relations: [
                'Country'
            ]

        });
    }

    async create(teamMemberData: TeamMemberDto): Promise<TeamMemberDto> {
        try {
            return await this.teamMemberRepository.save(teamMemberData);
        } catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    async update(id, teamMemberData: TeamMemberDto): Promise<UpdateResult> {
        try {
            return await this.teamMemberRepository.update(id, teamMemberData);
        } catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    async delete(id: any): Promise<DeleteResult> {
        const deleteResponse = await this.teamMemberRepository.softDelete(id);
        if (!deleteResponse.affected) {
            throw new NotFoundException(id);
        }
        return deleteResponse;
    }

}





