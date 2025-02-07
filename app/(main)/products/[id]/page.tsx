import AddToCartButton from "@/components/AddToCart";
import prisma from "./../../../../lib/db";
import { Suspense } from "react";
import LoadingProductDetail from "@/components/LoadingProductDetail";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // const product = await prisma.product.findUnique({
  //   where: { id: parseInt((await params).id) },
  // });
  // if (!product) return <div>Product not found</div>;
  return (
    <Suspense fallback={<LoadingProductDetail />}>
      <ProductDetails id={(await params).id} />
    </Suspense>
  );
}

async function ProductDetails({ id }: { id: string }) {
  const response = await fetch(
    `https://dummyjson.com/products/${id}`
  );
  if (!response.ok) {
    return <div>Product not found</div>;
  }
  const product = await response.json();

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
        {product.title}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
          />
        </div>

        {/* Details Section */}
        <div>
          <p className="text-gray-600 mb-6 text-lg">{product.description}</p>

          <div className="flex items-center mb-4">
            <span className="text-3xl font-semibold text-green-600">
              ${product.price}
            </span>
            <span className="text-lg text-gray-500 ml-3 line-through">
              ${(product.price * 1.2).toFixed(2)}
            </span>
          </div>

          <div className="flex items-center space-x-4 mb-6">
            <p className="text-sm text-gray-500">
              Rating: {product.rating}{" "}
              <span className="text-yellow-500">★</span>
            </p>
            <p className="text-sm text-gray-500">
              Brand:{" "}
              <span className="font-semibold text-gray-900">
                {product.brand}
              </span>
            </p>
          </div>

          <div className="mb-6">
            <p className="text-sm text-gray-500">
              Category:{" "}
              <span className="font-semibold text-gray-900">
                {product.category}
              </span>
            </p>
          </div>

          {/* Product Action Buttons */}
          <div className="space-x-4">
            <AddToCartButton
              productId={product.id}
              productTitle={product.title}
              productPrice={product.price}
            />
            <button className="w-50 py-3 px-6 text-white bg-green-600 hover:bg-green-700 rounded-lg shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
