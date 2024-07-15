import React from 'react';
import UserNav from "@/app/(user)/Nav/Nav";
import Footer from "@/app/(publicpages)/component/Footer/Footer";

const Layout = ({
                    children,
                }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div>
            <UserNav/>
            {children}
            <Footer/>
        </div>
    );
};

export default Layout;