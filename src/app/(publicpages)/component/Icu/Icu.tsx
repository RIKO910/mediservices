import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import icu from '../../../../../public/assets/img/icu.png'
import Image from 'next/image';

const Icu = () => {
    return (
        <div className="bg-white">
            <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
                <div
                    className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-20">
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
                        <div className=" lg:p-16 sm:p-10 md:p-10">
                            <h1 className="text-4xl  font-bold tracking-tight text-gray-900 sm:text-6xl">
                                Find your ICU
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Request a ride, hop in, and go.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"/>
            </div>
        </div>
    );
};

export default Icu;