export default function ProductCardSkeleton() {
    return (
      <div className="group relative bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <div className="animate-pulse">
          <div className="bg-gray-300 h-64 w-full"></div>
          <div className="p-6">
            <div className="bg-gray-300 h-6 w-3/4 mb-4"></div>
            <div className="bg-gray-300 h-4 w-full mb-2"></div>
            <div className="bg-gray-300 h-4 w-2/3 mb-4"></div>
            <div className="bg-gray-300 h-6 w-1/4"></div>
          </div>
        </div>
      </div>
    );
  }