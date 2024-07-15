import React from 'react';
import Link from "next/link";
import {Disclosure} from "@headlessui/react";

const AuthNav = () => {
    return (
        <Disclosure as="nav" className="bg-white shadow">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link href="/" className="text-black  text-lg">MediServices</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Disclosure>
    );
};

export default AuthNav;