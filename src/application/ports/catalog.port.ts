import type { Product } from "@/domain/entities/product";
export interface CatalogPort { listProducts(): Promise<Product[]>; getProduct(id: string): Promise<Product | undefined>; }
