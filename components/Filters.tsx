"use client";

import Link from "next/link";

interface FiltersProps {
  categories: Category[];
}
interface Category {
  slug: string;
  name: string;
  url: string;
}

export default function Filters({ categories }: FiltersProps) {
  return (
    <div className="w-64 p-4">
      <h2 className="text-lg font-bold mb-4">Categories</h2>
      <ul className="space-y-2">
        <Link href={"/"} className="text-gray-800 hover:text-blue-600">
          All
        </Link>
        {categories.map((category) => (
          <li key={category.slug}>
            <Link
              href={`/?category=${category.name}`}
              className="text-gray-800 hover:text-blue-600"
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
