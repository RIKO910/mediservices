import React from 'react';
import AuthNav from "@/app/(auth)/Nav/Nav";

const Layout = ({
                    children,
                }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div>
            <AuthNav/>
            {children}
        </div>
    );
};

export default Layout;