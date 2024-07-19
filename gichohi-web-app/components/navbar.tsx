"use client"

import Image from 'next/image';
import logo from '../public/images/logo.png';
import Link from "next/link";
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const pathname = usePathname();
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Industry', path: '/industry' },
        { name: 'Contact Us', path: '/contact' }
    ];

    return (
        <nav className="px-10 py-5 flex gap-[24%] justify-stretch">
            <Link href={"/"} id="logo" className="flex align-middle">
                <Image
                    style={{ width: "40px" }}
                    src={logo}
                    alt="Gichohi Website"
                />
            </Link>
            <div className="pt-2">
                <ul className="list-none flex gap-20 text-sm font-semibold">
                    {navItems.map(item => (
                        <li key={item.name}>
                            <Link
                                href={item.path}
                                className={`relative ${pathname === item.path ? 'after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-[-6px] after:h-[2px] after:bg-gradient-to-l from-[#C00000] to-[#161D59]'  : ''}`}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
