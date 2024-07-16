// import NextAuth from "next-auth"
//
// declare module "next-auth" {
//     interface User{
//         username: string,
//     }
//
//     interface Session {
//         user: User & {
//             username: string,
//         }
//         token:{
//             username: string,
//         }
//     }
// }

// import NextAuth from "next-auth";
//
// declare module "next-auth" {
//     interface User {
//         username: string;
//         role: "ADMIN" | "USER" | "DRIVER" | "HOSPITAL";
//     }
//
//     interface Session {
//         user: {
//             username: string;
//             role: "ADMIN" | "USER" | "DRIVER" | "HOSPITAL";
//         };
//     }
//
//     interface JWT {
//         username: string;
//         role: "ADMIN" | "USER" | "DRIVER" | "HOSPITAL";
//     }
// }

import NextAuth from "next-auth"

declare module "next-auth" {
    interface User{
        username: string,
        role: "ADMIN" | "USER" | "DRIVER" | "HOSPITAL";
    }

    interface Session {
        user: User & {
            username: string,
            role: "ADMIN" | "USER" | "DRIVER" | "HOSPITAL";
        }
        token:{
            username: string,
            role: "ADMIN" | "USER" | "DRIVER" | "HOSPITAL";
        }
    }
}