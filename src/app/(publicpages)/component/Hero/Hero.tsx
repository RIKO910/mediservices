import React from 'react';
import Image from 'next/image';
import { FaLocationArrow } from 'react-icons/fa';
import ambulance from '../../../../../public/assets/img/ambulance.png'

const MyComponent = () => {
    return (
        <div className="bg-white">
            <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
                <div className="mx-auto max-w-7xl px-6 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-20">
                    <div className="mt-10 flex flex-col items-center text-center lg:items-start lg:text-left lg:px-0 lg:pt-4">
                        <div className="max-w-2xl">
                            <div className="max-w-lg">
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                    Find your ambulance
                                </h1>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Request a ride, hop in, and go.
                                </p>
                                <div className="mt-10 flex flex-col items-center gap-x-6 lg:items-start">
                                    <div className="relative mb-4 w-full lg:w-2/3">
                                        <div className="relative flex items-center">
                                            <input
                                                id="location"
                                                name="location"
                                                type="text"
                                                placeholder="Enter location"
                                                className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                            <FaLocationArrow className="absolute right-3 text-black cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="relative mb-4 w-full lg:w-2/3">
                                        <div className="relative flex items-center">
                                            <input
                                                id="destination"
                                                name="destination"
                                                type="text"
                                                placeholder="Enter destination"
                                                className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                            <FaLocationArrow className="absolute right-3 text-black cursor-pointer" />
                                        </div>
                                    </div>
                                    <button
                                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        See Price
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 sm:mt-24 flex justify-center lg:mt-0 lg:justify-end">
                        <div className="relative w-full  lg:w-screen">
                            <Image src={ambulance} alt="Ambulance" className="rounded-xl" />
                            <div
                                className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36"
                                aria-hidden="true"
                            />
                        </div>
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
            </div>
        </div>
    );
};

export default MyComponent;
