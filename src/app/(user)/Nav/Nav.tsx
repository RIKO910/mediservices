import React from 'react';
import Link from "next/link";
import {Disclosure, DisclosureButton, DisclosurePanel} from "@headlessui/react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";

const UserNav = () => {
    return (
        <Disclosure as="nav" className="bg-white shadow">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link href="/" className="text-black  text-lg">MediServices</Link>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                                <Link
                                    href="/ambulance"
                                    className="rounded-full px-3 py-2 text-sm font-medium text-black hover:bg-gray-200 "
                                >
                                    Ambulance
                                </Link>
                                <Link
                                    href="/icu"
                                    className="rounded-full px-3 py-2 text-sm font-medium text-black hover:bg-gray-200 "
                                >
                                    ICU
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                        <div className="flex items-center space-x-4">
                            <Link
                                href="/login-with-user"
                                className="rounded-full px-3 py-2 text-sm font-medium text-black hover:bg-gray-200 "
                            >
                                Log in
                            </Link>
                            <Link
                                href="/signup-with-user"
                                className="rounded-full px-3 py-2 text-sm font-medium text-black bg-gray-100 hover:bg-gray-200"
                            >
                                Sign up
                            </Link>

                        </div>
                    </div>
                    <div className="-mr-2 flex space-x-1 sm:hidden ">
                        <Link
                            href="/login-with-user"
                            className="rounded-full px-3 py-2 text-sm font-medium text-black bg-white hover:bg-gray-200"
                        >
                            Log in
                        </Link>
                        <Link
                            href="/signup-with-user"
                            className="rounded-full px-3 py-2 text-sm font-medium text-black bg-white hover:bg-gray-200"
                        >
                            Sign up
                        </Link>
                        {/* Mobile menu button */}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <DisclosureButton
                        as="a"
                        href="/ambulance"
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                        Ambulance
                    </DisclosureButton>
                    <DisclosureButton
                        as="a"
                        href="/icu"
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                        ICU
                    </DisclosureButton>
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
};

export default UserNav;