import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { SubCategoryDto } from "./sub-category.dto";
import { SubCategory } from "./sub-category.entity";
import { SubCategoryService } from "./sub-category.service";

@Controller('subcategory')
export class SubCategoryController {
  constructor(
    private readonly subcategoryService: SubCategoryService
  ) { }

  @Get()
  public listAll(@Paginate() query: PaginateQuery): Promise<Paginated<SubCategory>> {
    return this.subcategoryService.listAll(query);
  }

  @Get('/:id')
  async listById(@Param('id') subcategoryId: number) {
    return this.subcategoryService.listSubCategoryById(subcategoryId);
  }

  @Post('create')
  async create(@Body() subcategoryData: SubCategoryDto): Promise<any> {
    return this.subcategoryService.create(subcategoryData);
  }

  @Patch('update/:id')
  async update(@Param('id') id, @Body() subcategoryData: SubCategoryDto): Promise<any> {
    return this.subcategoryService.update(id, subcategoryData);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id): Promise<any> {
    return this.subcategoryService.delete(id);
  }
}

