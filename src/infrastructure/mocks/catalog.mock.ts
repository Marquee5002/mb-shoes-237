import type { Product } from "@/domain/entities/product";
import type { CatalogPort } from "@/application/ports/catalog.port";

const products: Product[] = [
  { id: "s-001", name: "Sandalé Naya", category: "Sandales", price: 28000, image: "/assets/shoe-sandal.svg", description: "Sandale élégante, pensée pour les sorties et cérémonies.", colors: ["Noir", "Cognac", "Rouge terre"], madeToOrder: true },
  { id: "e-001", name: "Escarpin Élise", category: "Escarpins", price: 35000, image: "/assets/shoe-heel.svg", description: "Silhouette féminine et ligne nette pour vos occasions spéciales.", colors: ["Ivoire", "Noir", "Bordeaux"], madeToOrder: true },
  { id: "m-001", name: "Mocassin Mboa", category: "Mocassins", price: 42000, image: "/assets/shoe-loafer.svg", description: "Un classique confortable avec une finition artisanale.", colors: ["Marron", "Noir", "Camel"], madeToOrder: true },
  { id: "b-001", name: "Sneaker Douala", category: "Baskets", price: 39000, image: "/assets/shoe-sneaker.svg", description: "Une basket urbaine personnalisable, conçue pour le quotidien.", colors: ["Blanc", "Noir", "Beige"], madeToOrder: true },
];
export const mockCatalog: CatalogPort = { async listProducts() { return products; }, async getProduct(id) { return products.find(p => p.id === id); } };
