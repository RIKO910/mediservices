import React from 'react';
import Nav from "@/app/(publicpages)/component/Nav/Nav";
import Footer from "@/app/(publicpages)/component/Footer/Footer";

const Layout = ({
                    children,
                }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div>
            {children}
            <Footer/>
        </div>
    );
};

export default Layout;