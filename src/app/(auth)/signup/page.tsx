import React from 'react';
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const SignUpPage = () => {
    return (
        <div className="lg:grid lg:grid-cols-2 gap-x-2 lg:mt-32 ">
            <div className="mx-auto text-start ">
                <div className="mb-14 flex">
                    <Link href="" id="" className="text-3xl font-bold text-gray-900 sm:text-3xl">
                        Sign Up to request an ambulance
                    </Link>
                    <FaArrowRight className="text-3xl mt-2 ml-4 font-bold text-gray-900 sm:text-3xl" />
                </div>
                <hr className="border-black my-4"/>
                <div className="my-14 flex">
                    <Link href="" id="" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                        Create a hospital management account
                    </Link>
                    <FaArrowRight className="text-3xl mt-2 ml-4 font-bold text-gray-900 sm:text-3xl" />
                </div>
                <hr className="border-black mb-14 mt-4"/>
            </div>

            <div className=" mx-auto text-start ">
                <div className=" flex">
                    <Link href="" id="" className="text-3xl mb-14 font-bold tracking-tight text-gray-900 sm:text-3xl">
                        Create a driver account
                    </Link>
                    <FaArrowRight className="text-3xl mt-2 ml-4 font-bold text-gray-900 sm:text-3xl" />
                </div>
                <hr className="border-black "/>
            </div>
        </div>
    );
};

export default SignUpPage;