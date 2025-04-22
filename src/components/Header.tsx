"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter()
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleSearch = (e: any) => {
        e.preventDefault();

        console.log("Searching for:", searchQuery);
        router.push(`/?search=${searchQuery}`)
    };

    return (
        <header className="bg-gray-800 text-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <Link href="/">Movie-app</Link>
                </div>

                <nav className="hidden md:flex space-x-6">
                    <Link href="/" className="hover:text-gray-400">Popular</Link>
                    <Link href="/toprated" className="hover:text-gray-400">Top Rated</Link>
                    <Link href="/upcoming" className="hover:text-gray-400">Upcoming</Link>
                </nav>

                <div className="hidden md:flex items-center">
                    <form onSubmit={handleSearch} className="flex items-center">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search..."
                            className="px-4 py-2 rounded-l-md text-black bg-white"
                        />
                        <button type="submit" className="px-4 py-2 bg-gray-700 rounded-r-md hover:bg-gray-600">
                            Search
                        </button>
                    </form>
                </div>

                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <nav className="md:hidden bg-gray-800">
                    <Link href="/" className="block px-4 py-2 hover:bg-gray-700">Popular</Link>
                    <Link href="/toprated" className="block px-4 py-2 hover:bg-gray-700">Top Rated</Link>
                    <Link href="/upcoming" className="block px-4 py-2 hover:bg-gray-700">Upcoming</Link>
                    <div className="px-4 py-2">
                        <form onSubmit={handleSearch} className="flex">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search..."
                                className="w-full px-4 py-2 rounded-l-md text-black"
                            />
                            <button type="submit" className="px-4 py-2 bg-gray-700 rounded-r-md hover:bg-gray-600">
                                Search
                            </button>
                        </form>
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Header;