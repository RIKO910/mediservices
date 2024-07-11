import React from 'react';
import icu from '../../../../../public/assets/img/icu.png'
import Image from 'next/image';
import Link from "next/link";

const Icu = () => {
    return (
        <div className="bg-white">
            <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
                <div
                    className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pb-20">
                    <div className="px-6 lg:px-0 ">
                        <div className="mx-auto max-w-2xl">
                            <Image src={icu} alt="icu" className="rounded-xl"/>
                        </div>
                    </div>
                    <div className="mt-20 sm:mt-28 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-20 lg:w-screen">
                        <div
                            className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36"
                            aria-hidden="true"
                        />
                        <div className=" px-6 lg:p-16 sm:p-10 md:p-10">
                            <h1 className="text-4xl  font-bold tracking-tight text-gray-900 sm:text-6xl">
                                Find Your ICU
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Locate your nearest hospital with ICU facilities and receive the critical care you need
                                promptly.
                            </p>
                            <div className="mt-6 ">
                                <button
                                    className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >Get started
                                </button>
                                <Link href="" className="relative group ml-4 text-black no-underline">
                                    Check out our solutions
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transition-transform duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100 mt-1" style={{ top: '100%' }}></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"/>
            </div>
        </div>
    );
};

export default Icu;