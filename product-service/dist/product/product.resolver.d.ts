import { Product } from './Schema/product.schema';
import { ProductService } from './product.service';
import { CreateProductDto } from './create-product.dto';
export declare class ProductResolver {
    private readonly productService;
    constructor(productService: ProductService);
    products(): Promise<Product[]>;
    createUser(CreateProductDto: CreateProductDto): Promise<Product>;
}
