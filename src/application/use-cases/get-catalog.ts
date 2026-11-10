import type { CatalogPort } from "@/application/ports/catalog.port";
export const getCatalog = (catalog: CatalogPort) => catalog.listProducts();
