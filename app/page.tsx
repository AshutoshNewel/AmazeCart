import { fetchProducts, fetchCategories } from "@/lib/api";
import ProductCard from "@/components/ProductCard";
import Pagination from "@/components/Pagination";
import Filters from "@/components/Filters";
import { Suspense } from "react";
import LoadingProductCard from "@/components/LoadingProductCard";

interface Product {
  id: number;
  name: string;
  title: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  thumbnail: string;
  // Add any other relevant fields
}

export default async function Home({
  searchParams,
}: {
  searchParams: { page?: string; category?: string; sort?: string; q?: string };
}) {
  const currentPage = parseInt( (await searchParams).page || "1");
  const limit = 9;
  const skip = (currentPage - 1) * limit;
  const category =  (await searchParams).category || "";
  const sort = (await searchParams).sort || "";
  const searchQuery = (await searchParams).q || "";

  const products = await fetchProducts({
    limit,
    skip,
    category,
    sort,
    search: searchQuery,
  });
  const categories = await fetchCategories();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Featured Products</h1>
      <Suspense fallback={<LoadingProductCard />}>
        <div className="flex">
          <Filters categories={categories} />
          <div className="flex-1">
            {products.length === 0 ? (
              <p className="text-center text-xl font-semibold">
                No products found in {category} category.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {products.map((product: Product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}

            {products.length > 0 && (
              <Pagination
                currentPage={currentPage}
                totalProducts={100} // Replace with the actual total number of products
                limit={limit}
                category={category}
                searchQuery={searchQuery}
              />
            )}
          </div>
        </div>
      </Suspense>
    </div>
  );
}
