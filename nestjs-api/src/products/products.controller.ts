import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { ProductDto } from "./products.dto";
import { Product } from "./products.entity";
import { ProductService } from "./products.service";

@Controller('product')
export class ProductController {
  constructor(
    private readonly productervice: ProductService
  ) { }

  @Get()
  public listAll(@Paginate() query: PaginateQuery): Promise<Paginated<Product>> {
    return this.productervice.listAll(query);
  }

  @Get('/:id')
  async listById(@Param('id') productId: number) {
    return this.productervice.listProductById(productId);
  }

  @Post('create')
  async create(@Body() productData: ProductDto): Promise<any> {
    return this.productervice.create(productData);
  }

  @Patch('update/:id')
  async update(@Param('id') id, @Body() productData: ProductDto): Promise<any> {
    return this.productervice.update(id, productData);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id): Promise<any> {
    return this.productervice.delete(id);
  }
}

