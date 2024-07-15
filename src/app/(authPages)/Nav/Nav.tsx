import React from 'react';
import Link from "next/link";
import {Disclosure} from "@headlessui/react";

const AuthPagesNav = () => {
    return (
        <Disclosure as="nav" className="bg-white shadow">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link href="/" className="text-black  text-lg">MediServices</Link>
                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                        <div className="flex items-center space-x-4">
                            <Link
                                href="/login"
                                className="rounded-full px-3 py-2 text-sm font-medium text-black hover:bg-gray-200 "
                            >
                                Log in
                            </Link>
                            <Link
                                href="/signup"
                                className="rounded-full px-3 py-2 text-sm font-medium text-black bg-gray-100 hover:bg-gray-200"
                            >
                                Sign up
                            </Link>

                        </div>
                    </div>
                    <div className="-mr-2 flex space-x-1 sm:hidden ">
                        <Link
                            href="/login"
                            className="rounded-full px-3 py-2 text-sm font-medium text-black hover:bg-gray-200 "
                        >
                            Log in
                        </Link>
                        <Link
                            href="/signup"
                            className="rounded-full px-3 py-2 text-sm font-medium text-black bg-white hover:bg-gray-200"
                        >
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </Disclosure>
    );
};

export default AuthPagesNav;