import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterOperator, paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { CategoryDto } from "./category.dto";
import { Category } from "./category.entity";


@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category) private categoryRepository: Repository<Category>
    ) { }

    public listAll(query: PaginateQuery): Promise<Paginated<Category>> {
        return paginate(query, this.categoryRepository, {
            sortableColumns: ['name'],
            defaultSortBy: [['id','ASC']],
            searchableColumns: ['name']
        })
    }

    async listCategoryById(id: any) {
        return this.categoryRepository.findOne({
            where: { id: id }
        });
    }

    async create(categoryData: CategoryDto): Promise<CategoryDto> {
        try {
            return await this.categoryRepository.save(categoryData);
        } catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    async update(id, orderData: CategoryDto): Promise<UpdateResult> {
      try  {
            return await this.categoryRepository.update(id, orderData);
        }catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    async delete(id: any): Promise<DeleteResult> {
        const deleteResponse = await this.categoryRepository.softDelete(id);
        if (!deleteResponse.affected) {
            throw new NotFoundException(id);
        }
        return deleteResponse;
    }

}





