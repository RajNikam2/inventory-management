import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { CategoryDto } from "./category.dto";
import { Category } from "./category.entity";
import { CategoryService } from "./category.service";

@Controller('category')
export class CategoryController {
  constructor(
    private readonly categoryService: CategoryService,
  ) { }

  @Get()
  public listAll(@Paginate() query: PaginateQuery): Promise<Paginated<Category>> {
    return this.categoryService.listAll(query);
  }

  @Get('/:id')
  async listById(@Param('id') categoryId: number) {
    return this.categoryService.listCategoryById(categoryId);
  }

  @Post('create')
  async create(@Body() categoryData: CategoryDto): Promise<any> {
    return this.categoryService.create(categoryData);
  }

  @Patch('update/:id')
  async update(@Param('id') id, @Body() categoryData: CategoryDto): Promise<any> {
    return this.categoryService.update(id, categoryData);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id): Promise<any> {
    return this.categoryService.delete(id);
  }
}

