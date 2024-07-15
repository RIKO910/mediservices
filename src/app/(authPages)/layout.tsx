import React from 'react';
import AuthPagesNav from "@/app/(authPages)/Nav/Nav";

const Layout = ({
                    children,
                }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div>
            <AuthPagesNav/>
            {children}
        </div>
    );
};

export default Layout;