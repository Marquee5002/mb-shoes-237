export type ProductCategory = "Sandales" | "Escarpins" | "Mocassins" | "Baskets";
export type Product = { id: string; name: string; category: ProductCategory; price: number; image: string; description: string; colors: string[]; madeToOrder: boolean; };
