import React, { memo, useState, SyntheticEvent } from 'react'
import Link, { LinkProps } from 'next/link'

const Logo = () => (
  <Link href="/">
    <a className="flex items-center">
      <img
        className="h-8 w-auto sm:h-10"
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
      />
      {/* <h1>Fun</h1> */}
    </a>
  </Link>
)

const NavLink = memo(
  ({
    children,
    href,
    isPopover = false,
  }: React.PropsWithChildren<LinkProps & { isPopover?: boolean }>) => {
    const linkClassName = isPopover
      ? 'block px-3 py-2 rounded-md text-base text-center font-medium text-gray-400 hover:text-gray-900 hover:bg-gray-50'
      : 'font-medium text-gray-400 hover:text-gray-900'
    return (
      <Link href={href}>
        <a className={linkClassName}>{children}</a>
      </Link>
    )
  }
)

interface Link {
  href: string
  title: string
}

const links: Link[] = [
  {
    href: '/',
    title: 'BingWallpaper',
  },
  {
    href: '/dog',
    title: 'dog',
  },
]

const Header: React.FC = () => {
  const [show, setShow] = useState(false)

  const onLinkClick = (e: SyntheticEvent) => {
    if (show && (e.target as HTMLElement).tagName === 'A') {
      setShow(false)
    }
  }
  return (
    <header className="h-16 flex items-center bg-white  shadow-md	">
      <div className="flex justify-between items-center container px-2 md:px-8 mx-auto">
        <Logo />
        <div className="-mr-2 -my-2 md:hidden flex items-center">
          <button
            type="button"
            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            aria-expanded="false"
            onClick={() => setShow(true)}
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <nav className="hidden md:flex items-center space-x-10">
          {links.map((link) => (
            <NavLink href={link.href} key={link.href}>
              {link.title}
            </NavLink>
          ))}
        </nav>
      </div>
      <div
        className={`absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden ${
          !show && 'hidden'
        }`}
      >
        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="px-5 pt-4 flex items-center justify-between">
            <Logo />
            <div className="-mr-2">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                onClick={() => setShow(false)}
              >
                <span className="sr-only">Close main menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1" onClick={onLinkClick}>
            {links.map((link) => (
              <NavLink href={link.href} key={link.href} isPopover>
                {link.title}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

// const Header: React.FC = () => {
//   return (
//     <header classNameName="h-16 flex items-center bg-indigo-400">
//       <div classNameName="flex container mx-auto">
//         <Logo />
//         <div classNameName="md:hidden">
//           <svg
//             classNameName="h-6 w-6"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             aria-hidden="true"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </div>
//         <nav classNameName="hidden md:flex">
//           <Link href="/">
//             <a>Home</a>
//           </Link>
//         </nav>
//       </div>
//     </header>
//   )
// }

export default Header
