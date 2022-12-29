import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { ProductDto } from "./products.dto";
import { Product } from "./products.entity";


@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product) private ProductRepository: Repository<Product>
    ) { }

    public listAll(query: PaginateQuery): Promise<Paginated<Product>> {
        return paginate(query, this.ProductRepository, {
            sortableColumns: ['desciptions'],
            relations:['category','subcategory'],
            defaultSortBy: [['id', 'ASC']],
            searchableColumns: ['desciptions'],
            // filterableColumns: {
            //     address: [FilterOperator.GTE, FilterOperator.LTE],
            // }
        })
    }

    async listProductById(id: any) {
        return this.ProductRepository.findOne({
            where: { id: id }
        });
    }

    async create(productData: ProductDto): Promise<ProductDto> {
        try {
            return await this.ProductRepository.save(productData);
        } catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    async update(id, productData: ProductDto): Promise<UpdateResult> {

        try {
            return await this.ProductRepository.update(id, productData);
        } catch (err) {
            throw new BadRequestException(err.message)
        }
    }

    async delete(id: any): Promise<DeleteResult> {
        const deleteResponse = await this.ProductRepository.softDelete(id);
        if (!deleteResponse.affected) {
            throw new NotFoundException(id);
        }
        return deleteResponse;
    }

}





