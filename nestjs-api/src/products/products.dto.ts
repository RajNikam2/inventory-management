import { Category } from "src/category/category.entity";
import { SubCategory } from "src/sub-category/sub-category.entity";

export class ProductDto{
    desciptions:number;
    category: Category;
    subcategory: SubCategory;

}