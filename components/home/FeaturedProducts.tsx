import { fetchFeaturedProducts } from "@/utils/actions"
import EmptyList from "../globals/EmptyList"
import SectionTitle from "../globals/SectionTitle"
import ProductsGrid from "../products/ProductsGrid";

async function FeaturedProducts() {
  const products = await fetchFeaturedProducts();
  if(products.length === 0) return <EmptyList />;
  return (
    <section className="pt-24">
      <SectionTitle text="featured products"/>
      <ProductsGrid products={products}/>
    </section>
  )
}

export default FeaturedProducts
