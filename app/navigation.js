import Link from 'next/link';

const Navigation = () => {
    return (
        <div className='flex flex-row justify-between items-center p-4 px-8 border-b border-zinc-800 '>
            <div>
                Logo
            </div>
            <div className=''>
                <ul className='flex flex-row gap-10 font-aeonik '>
                    <li>
                        <Link href="/">Home</Link>
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