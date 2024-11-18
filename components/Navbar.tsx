import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { auth } from '@clerk/nextjs/server';

const Navbar = () => {
    
  return (
    <div className="bg-cyan-950 rounded-b-xl text-slate-50">
      <ul className="flex justify-between py-4 px-8">

        <div>
            <Link href="/">
                <li>Home</li>
            </Link>
        </div>


        <div className='flex gap-6 items-center'>
        <Link href="/tenant">
                <li>Tenant</li>
        </Link>
        <Link href="/landlord">
                <li>Landlord</li>
        </Link>
        </div>


        <div className='flex gap-6 items-center'>
        <Link href="/sign-in">
                <li>Sign In</li>
        </Link>
        <Link href="/sign-up">
                <li>Sign Up</li>
        </Link>
            <li className='flex items-center'><UserButton/></li>
        </div>

      </ul>
    </div>
);
};

export default Navbar;
