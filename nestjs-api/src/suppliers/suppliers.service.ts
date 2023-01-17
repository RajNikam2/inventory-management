import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterOperator, paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { Country } from "src/country/country.entity";
import { UrlService } from "src/urls/urls.service";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { SulpplierDto } from "./suppliers.dto";
import { Supplier } from "./suppliers.entity";


@Injectable()
export class SupplierService {
    constructor(
        @InjectRepository(Supplier) 
        private supplierRepository: Repository<Supplier>,
    ) { }

    public listAll(query: PaginateQuery): Promise<Paginated<Supplier>> {
        return paginate(query, this.supplierRepository, {
            sortableColumns: ['organization','country','type'],
            defaultSortBy: [['organization','ASC'],['country','ASC'],['type','ASC']],
            searchableColumns: ['organization','country'],
            filterableColumns: {
                'country.name': [FilterOperator.EQ],
                'type.name': [FilterOperator.EQ]
            }
        })
    }

    async listsupplierById(id: any) {
        return this.supplierRepository.findOne({
            where: { id:id },
            relations:[
                'country','type'
            ]
        });
    }
    async create(suppliierData: SulpplierDto): Promise<SulpplierDto> {
        try {
            return await this.supplierRepository.save(suppliierData);
        } catch (err) {
            throw new BadRequestException(err.message);
        }
    }


    async update(id, supplierData: SulpplierDto): Promise<UpdateResult> {
       try {
            return await this.supplierRepository.update(id, supplierData);
        }catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    async delete(id: any): Promise<DeleteResult> {
        const deleteResponse = await this.supplierRepository.softDelete(id);
        if (!deleteResponse.affected) {
            throw new NotFoundException(id);
        }
        return deleteResponse;
    }

}





