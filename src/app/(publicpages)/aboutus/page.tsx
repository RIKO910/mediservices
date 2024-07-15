import React from 'react';
import Link from "next/link";
import AboutDescription from "@/app/(publicpages)/aboutus/Description/Description";
import PersonalData from "@/app/(publicpages)/aboutus/Personal/Personal";
import Faq from "@/app/(publicpages)/aboutus/Faq/Faq";
import Team from "@/app/(publicpages)/aboutus/Team/Team";
import Blog from "@/app/(publicpages)/aboutus/Blog/Blog";

const AboutUsPage = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url('/assets/img/about.jpg')`,}}  className="bg-cover bg-no-repeat ">
                <div className="mx-auto bg-cover bg-center lg:pb-32 pb-28 sm:px-6">
                    <h1 className="text-4xl px-4 pt-20 pb-5 lg:px-20 font-bold tracking-tight text-white sm:text-6xl">
                        About Us
                    </h1>
                    <Link href="#" className=" px-4 lg:px-20 text-white "> HOME / <span className="text-blue-700">ABOUT</span></Link>
                </div>
            </div>
            <AboutDescription/>
            {/*<Faq/>*/}
            <PersonalData/>
            <Team/>
            <Blog/>
        </div>
    );
};

export default AboutUsPage;