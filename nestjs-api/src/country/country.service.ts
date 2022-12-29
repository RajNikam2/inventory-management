import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterOperator, paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { CountryDto } from "./country.dto";
import { Country } from "./country.entity";


@Injectable()
export class CountryService {
    constructor(
        @InjectRepository(Country) private countryRepository: Repository<Country>
    ) { }

    public listAll(query: PaginateQuery): Promise<Paginated<Country>> {
        return paginate(query, this.countryRepository, {
            sortableColumns: ['name'],
            defaultSortBy: [['id', 'DESC',]],
            searchableColumns: ['name'],
            // filterableColumns: {
            //     country:[FilterOperator.EQ]
            // }
        })
    }

    async listcountryById(id: any) {
        return this.countryRepository.findOne({
            where: { id: id }
        });
    }

    async create(countryData: CountryDto): Promise<CountryDto> {
       try {
            return await this.countryRepository.save(countryData);
        }catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    async update(id, countryData: CountryDto): Promise<UpdateResult> {
        try {
            return await this.countryRepository.update(id, countryData);
        }catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    async delete(id: any): Promise<DeleteResult> {
        const deleteResponse = await this.countryRepository.softDelete(id);
        if (!deleteResponse.affected) {
            throw new NotFoundException(id);
        }
        return deleteResponse;
    }

}





