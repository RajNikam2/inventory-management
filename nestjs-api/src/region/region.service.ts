import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterOperator, paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { RegionDto } from "./region.dto";
import { Region } from "./region.entity";


@Injectable()
export class RegionService {
    constructor(
        @InjectRepository(Region) private regionRepository: Repository<Region>
    ) { }

    public listAll(query: PaginateQuery): Promise<Paginated<Region>> {
        return paginate(query, this.regionRepository, {
            sortableColumns: ['name'],
            defaultSortBy: [['id', 'DESC']],
            searchableColumns: ['name'],
            // filterableColumns: {
            //     address: [FilterOperator.GTE, FilterOperator.LTE],
            // }
        })
    }

    async listRegionById(id: any) {
        return this.regionRepository.findOne({
            where: { id: id }
        });
    }

    async create(regionData: RegionDto): Promise<RegionDto> {
        try{
            return await this.regionRepository.save(regionData);
        }catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    async update(id, regionData: RegionDto): Promise<UpdateResult> {
        try{
            return await this.regionRepository.update(id, regionData);
        }catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    async delete(id: any): Promise<DeleteResult> {
        const deleteResponse = await this.regionRepository.softDelete(id);
        if (!deleteResponse.affected) {
            throw new NotFoundException(id);
        }
        return deleteResponse;
    }

}





