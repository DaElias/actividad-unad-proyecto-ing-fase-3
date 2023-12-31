"use client"
import { useState } from "react";
import IconMenu from "@/components/ui/svg/IconMenu";
import { PATH_ROUTE } from "@/util/const";
import Link from "next/link";
import useClickOut from "@/hooks/useClickOut";

export default function DynamicNavbar() {
    const [ref, isActivate, setIsActivate] = useClickOut()
    
    return (
        <div className="relative sm:hidden">
            <span className="cursor-pointer" onClick={() => setIsActivate(prev => !prev)}>
                <IconMenu size="30" className="block sm:hidden" isActivate={isActivate} />
            </span>
            {isActivate && (
                <ul ref={ref} className="flex flex-col gap-2 w-48 sm:w-64 transition-all z-50 shadow-lg bg-blue-600 text-white rounded-lg py-5 absolute top-12 right-4">
                    {PATH_ROUTE.map(({ title, path }, key) => (
                        <li
                            key={key}
                            className="text-center border-b border-white last:border-b-0 hover:bg-blue-700"
                        >
                            <Link className="block py-2" href={path}>
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
