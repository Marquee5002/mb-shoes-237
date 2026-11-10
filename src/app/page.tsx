import { Storefront } from "@/components/storefront";
import { mockCatalog } from "@/infrastructure/mocks/catalog.mock";
import { getCatalog } from "@/application/use-cases/get-catalog";

export default async function Home() {
  const products = await getCatalog(mockCatalog);
  return <Storefront products={products} />;
}
