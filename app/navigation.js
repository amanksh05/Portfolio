"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const Navigation = () => {
    const pathName = usePathname();
    return (
        <div className='sticky top-0 z-50 flex flex-row justify-between items-center p-4 px-8 border-b border-zinc-800 bg-black '>
            <div>
                Logo
            </div>
            <div className=''>
                <ul className='flex flex-row gap-10 font-aeonik '>
                    <li>
                        <Link href="/" className={pathName==='/' ? 'font-medium underline underline-offset-8' :''}>Home</Link>
                    </li>
                    <li>
                        <Link href="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link href="/about">About me</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;