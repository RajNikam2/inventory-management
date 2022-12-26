import { IsNotEmpty } from "class-validator";
import { Category } from "src/category/category.entity";
import { SubCategory } from "src/sub-category/sub-category.entity";

export class ProductDto{

    @IsNotEmpty()
    desciptions:string;

    category: Category;

    subcategory: SubCategory;

}