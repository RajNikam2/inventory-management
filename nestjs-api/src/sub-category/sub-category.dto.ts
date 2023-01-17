import { IsNotEmpty } from "class-validator";
import { Category } from "src/category/category.entity";

export class SubCategoryDto{

    @IsNotEmpty()
    name:string;
    
    category: Category;

}