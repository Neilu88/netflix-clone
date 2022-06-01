import { BellIcon, SearchIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          draggable={false}
          src="https://rb.gy/ulxxee"
          alt="logo"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />

        <ul className=" hidden space-x-4 md:flex">
          <li className="select-none headerLink">Home</li>
          <li className="select-none headerLink">TV Shows</li>
          <li className="select-none headerLink">Movies</li>
          <li className="select-none headerLink">New & Popular</li>
          <li className="select-none headerLink">My List</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="cursor-pointer hidden h-6 sm:inline w-6 " />
        <p className="hidden cursor-pointer select-none lg:inline">Kids</p>
        <BellIcon className="cursor-pointer h-6 w-6" />
        <Link href="/account">
          <img
            draggable={false}
            src="https://rb.gy/g1pwyx"
            alt="profile"
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  )
}
export default Header
