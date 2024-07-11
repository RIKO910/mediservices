import React from 'react';
import { FaAmbulance } from "react-icons/fa";
import { MdMedicalServices } from "react-icons/md";
import { FaHospital } from "react-icons/fa";
import { IoIosMan } from "react-icons/io";


const Page = () => {
    return (
        <div style={{ backgroundImage: `url('/assets/img/help.jpeg')`,
            height: '20%',

        }}  className="bg-cover bg-no-repeat bg-bottom">
            <div className="mx-auto text-center bg-cover bg-center lg:pb-52 pb-14">
                <h1 className="text-3xl lg:pt-32 pt-14 font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Welcome to MediServices Support
                </h1>
                <p className="lg:px-64 py-8">We’re here to help. Looking for customer service contact information?
                    Explore support resources for the relevant service below to find the best way to reach out about
                    your issue.
                </p>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className= "grid lg:grid-cols-4 grid-cols-2 w-fit gap-5 mx-auto ">
                        <div className="h-32 w-32 bg-white p-5">
                            <div className="font-bold text-3xl px-8 p-3">
                                <FaAmbulance/>
                            </div>
                            <div className="font-bold ">
                                Driver
                            </div>
                        </div>
                        <div className="h-32 w-32 bg-white p-5">
                            <div className="font-bold text-3xl px-7 p-3">
                                <IoIosMan />
                            </div>
                            <div className="font-bold">
                                Customer
                            </div>
                        </div>
                        <div className="h-32 w-32 bg-white p-5">
                            <div className="font-bold text-3xl px-7 p-3">
                                <MdMedicalServices />
                            </div>
                            <div className="font-bold">
                                Service
                            </div>
                        </div>
                        <div className="h-32 w-32 bg-white p-5">
                            <div className="font-bold text-3xl px-7 p-3">
                                <FaHospital />
                            </div>
                            <div className="font-bold ">
                                Hospital Manage
                            </div>
                        </div>
                    </div>
                </div>


                {/*<div className="flex justify-center gap-5 mx-auto ">*/}
                {/*    <div className="h-32 w-32 bg-white p-5">*/}
                {/*        <div className="font-bold text-3xl px-8 p-3">*/}
                {/*            <FaAmbulance/>*/}
                {/*        </div>*/}
                {/*        <div className="font-bold ">*/}
                {/*            Driver*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="h-32 w-32 bg-white p-5">*/}
                {/*        <div className="font-bold text-3xl px-7 p-3">*/}
                {/*            <FaAmbulance/>*/}
                {/*        </div>*/}
                {/*        <div className="font-bold">*/}
                {/*            Customer*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="h-32 w-32 bg-white p-5">*/}
                {/*        <div className="font-bold text-3xl px-7 p-3">*/}
                {/*            <FaAmbulance/>*/}
                {/*        </div>*/}
                {/*        <div className="font-bold">*/}
                {/*            Service*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="h-32 w-32 bg-white p-5">*/}
                {/*        <div className="font-bold text-3xl px-7 p-3">*/}
                {/*            <FaAmbulance/>*/}
                {/*        </div>*/}
                {/*        <div className="font-bold ">*/}
                {/*            Hospital Manage*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}


            </div>
        </div>
    );
};

export default Page;