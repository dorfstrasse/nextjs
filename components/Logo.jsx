import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href='/'>
      <img src='/VANDER-b.png' height={20} priority alt=''/>
    </Link>
  )
}

export default Logo