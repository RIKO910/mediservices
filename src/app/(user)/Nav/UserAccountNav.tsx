"use client"
import React from 'react';
import {signOut} from "next-auth/react";

const UserAccountNav = () => {
    return (
        <div>
            <button onClick={() => signOut({

                redirect:true,
                callbackUrl:`${window.location.origin}/login`,
            })}
                    type="button"
                    className="rounded-full px-3 py-2 text-sm font-medium text-black bg-red-300 hover:bg-red-400"
            >
                Sign Out
            </button>
        </div>
    );
};

export default UserAccountNav;