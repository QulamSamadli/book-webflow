
import Image from 'next/image'

import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='container '>
<div>
   <Link href="/"><Image
   width={118}
   height={35}
   src="/Logo.png"
   alt='Logo'
   /></Link>
   <Link href="https://www.facebook.com/" className='border-4 bg-[black]  '>
    <Image src="/Facebook.png"
    alt='Facebook'
    width={19}
    height={10}
    />
   </Link>
   <Link href="https://twitter.com/" className='border-4 '>
    <Image src="/Twitter.png"
    alt='Facebook'
    width={19}
    height={10}
    />
   </Link>
   <Link href="https://www.linkedin.com/" className='border-4 '>
    <Image src="/LinkedIn.png"
    alt='Facebook'
    width={19}
    height={10}
    />
   </Link>
  
</div>
<div>
   <Link href=""></Link>
   <Link href=""></Link>
   <Link href=""></Link>
   <Link href=""></Link>
   <Link href=""></Link>
   <Link href=""></Link>
   <Link href=""></Link>
    
</div>

    </header>
  )
}

export default Navbar