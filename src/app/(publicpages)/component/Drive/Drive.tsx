import React from 'react';
import driver from '../../../../../public/assets/img/driver.png'
import ambulance from "../../../../../public/assets/img/ambulance.png";
import Image from "next/image";
import Link from "next/link";

const Drive = () => {
    return (
        <div className="bg-white">
            <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
                <div
                    className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-10">
                    <div className="px-6 lg:px-0 lg:pt-4">
                        <div className="mx-auto max-w-2xl">
                            <div className="max-w-lg">
                                <h1 className="lg:mt-20 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                    Drive when you want, make what you need
                                </h1>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    A flexible platform empowering ambulance drivers with essential tools and resources.
                                </p>
                                <div className="mt-6 ">
                                    <button
                                        className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >Get started
                                    </button>
                                    <Link href="" className="relative group ml-4 text-black no-underline">
                                        Already have an account? Sign in
                                        <span
                                            className="absolute bottom-0 left-0 w-full h-0.5 bg-black transition-transform duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100 mt-1"
                                            style={{top: '100%'}}></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 sm:mt-24 flex justify-center lg:mt-0 lg:justify-end">
                        <div
                            className="absolute inset-y-0 left-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36"
                            aria-hidden="true"
                        />
                        <div className=" px-6 lg:px-0">
                            <Image src={driver} alt="Ambulance" className="rounded-xl"/>
                        </div>

                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"/>
            </div>
        </div>
    );
};

export default Drive;