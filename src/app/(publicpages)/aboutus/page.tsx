import React from 'react';
import Link from "next/link";

const AboutUsPage = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url('/assets/img/about.jpg')`,}}  className="bg-cover bg-no-repeat ">
                <div className="mx-auto bg-cover bg-center lg:pb-32 pb-28">
                    <h1 className="text-4xl px-10 pt-20 pb-5 lg:px-20 font-bold tracking-tight text-white sm:text-6xl">
                        About Us
                    </h1>
                    <Link href="#" className=" px-10 lg:px-20 text-white "> HOME / <span className="text-blue-700">ABOUT</span></Link>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;