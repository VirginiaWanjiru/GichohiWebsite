import Image from 'next/image';
import logo from '../../images/logo.png';

export default function NavBar({ activeItem }: { activeItem: string }) {
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Industry', path: '/industry' },
        { name: 'Contact Us', path: '/contact' }
    ];

    return (
        <nav className="px-10 py-5 flex gap-[24%] justify-stretch">
            <a href="/">
                <div id="logo" className="flex align-middle">
                    <div>
                        <Image
                            style={{ width: "40px" }}
                            src={logo}
                            alt="Gichohi Website"
                        />
                    </div>
                </div>
            </a>
            <div className="pt-2">
                <ul className="list-none flex gap-20 text-sm font-semibold">
                    {navItems.map(item => (
                        <li key={item.name}>
                            <a
                                href={item.path}
                                className={`relative ${activeItem === item.name ? 'after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-[-6px] after:h-[2px] after:bg-gradient-to-l from-[#C00000] to-[#161D59]'  : ''}`}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
