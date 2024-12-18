"use client";
import clsx from "clsx";
import Link from "next/link"; // Import Link
import { links } from "./links";
import { usePathname } from "next/navigation";

export const NavLinks = () => {
    const pathName = usePathname();

    return (
        <>
            {links.map((link) => {
                const isActive = pathName === link.href;

                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            "flex h-[48px] grow scroll-smooth items-center justify-center gap-2 p-3 text-sm text-slate-200 font-medium hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                            {
                                "bg-sky-100 text-blue-600": isActive,
                            }
                        )}
                    >
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
};
