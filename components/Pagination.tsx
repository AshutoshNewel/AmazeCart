'use client';

import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalProducts: number;
  limit: number;
  category?: string;
  searchQuery?: string;
}

export default function Pagination({
  currentPage,
  totalProducts,
  limit,
  category,
  searchQuery,
}: PaginationProps) {
  const totalPages = Math.ceil(totalProducts / limit);

  return (
    <div className="flex justify-center mt-8 space-x-2">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Link
          key={page}
          href={
            category
              ? `/?category=${category}&page=${page}`
              : searchQuery
              ? `/?q=${searchQuery}&page=${page}`
              : `/?page=${page}`
          }
          className={`px-4 py-2 rounded-lg ${
            currentPage === page
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          {page}
        </Link>
      ))}
    </div>
  );
}