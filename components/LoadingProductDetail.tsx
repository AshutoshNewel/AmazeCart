export default function LoadingProductDetail() {
  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
        <div className="bg-gray-300 h-8 w-3/4 mb-6"></div>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image Section */}
        <div className="flex justify-center">
          <div className="bg-gray-300 h-96 w-full rounded-lg"></div>
        </div>

        {/* Details Section */}
        <div>
          <div className="bg-gray-300 h-6 w-3/4 mb-6"></div>

          <div className="flex items-center mb-4">
            <div className="bg-gray-300 h-8 w-1/4"></div>
            <div className="bg-gray-300 h-4 w-1/4 ml-3"></div>
          </div>

          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-gray-300 h-4 w-1/4"></div>
            <div className="bg-gray-300 h-4 w-1/4"></div>
          </div>

          <div className="mb-6">
            <div className="bg-gray-300 h-4 w-1/4"></div>
          </div>

          {/* Product Action Buttons */}
          <div className="space-x-4">
            <div className="bg-gray-300 h-10 w-1/4 rounded-lg"></div>
            <div className="bg-gray-300 h-10 w-1/4 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
