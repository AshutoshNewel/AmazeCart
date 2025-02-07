"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function Navbar() {
  const { data: session } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get('category') || '';

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = e.currentTarget.search.value;
    router.push(category ? `/?q=${query}&category=${category}` : `/?q=${query}`);
  };
  return (
    <>
      <nav className="bg-blue-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-white text-2xl font bold">
            {" "}
            AmazeCart
          </Link>
          <form onSubmit={handleSearch} className="flex items-center space-x-4">
          <input
            type="text"
            name="search"
            placeholder="Search products..."
            className="p-2 border rounded-lg"
          />
          <button type="submit" className="bg-blue-600 text-white p-2 rounded-lg">
            Search
          </button>
        </form>
          <div className="flex space-x-4">
            {session ? (
              <>
                <span className="text-white">
                  Welcome, {session.user?.name}
                </span>
                <Link
                  href="/cart"
                  className="text-white hover:text-gray-300 flex items-center"
                >
                  {" "}
                  <svg
                    className="w-6 h-6 text-white-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="none"
                    viewBox="0 0 26 26"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                    />
                  </svg>{" "}
                  Cart{" "}
                </Link>
                <button
                  onClick={() => signOut()}
                  className="text-white hover:text-gray-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="text-white hover:text-gray-200">
                  Login
                </Link>
                <Link
                  href="/register"
                  className="text-white hover:text-gray-200"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
