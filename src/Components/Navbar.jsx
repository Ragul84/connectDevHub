import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const navItems = [
    { path: '/', title: 'About' },
    { path: '/mynotes', title: 'Create A Post' },
    { path: '/my-roles', title: 'Profile' },
    { path: '/community', title: 'Communities' },
    { path: '/post-job', title: 'Roadmap Request' },
  ]
 const[loggedIn, setLoggedIn] = useState(false)
  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4 ">
      <nav className="flex justify-between items-center py-6">
        <a href="/" className="flex items-center gap-2 text-2xl text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="38"
            viewBox="0 0 37 38"
            fill="none"
          >
            <g filter="url(#filter0_dd_40_427)">
              <circle
                cx="16.0143"
                cy="12.5143"
                r="12.0143"
                fill="#3575E2"
                fill-opacity="0.4"
                shape-rendering="crispEdges"
              />
            </g>
            <g filter="url(#filter1_dd_40_427)">
              <circle cx="20.9857" cy="17.4857" r="12.0143" fill="#3575E2" />
            </g>
            <defs>
              <filter
                id="filter0_dd_40_427"
                x="0"
                y="0.5"
                width="32.0286"
                height="32.0286"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_40_427"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_40_427"
                  result="effect2_dropShadow_40_427"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_40_427"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_dd_40_427"
                x="4.97144"
                y="5.47144"
                width="32.0286"
                height="32.0286"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_40_427"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_40_427"
                  result="effect2_dropShadow_40_427"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_40_427"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <span className="font-bold" style={{}}>
            {' '}
            Dev
            <span
              className="text-blue font-bold"
              style={{ fontFamily: 'cursive', fontStyle: '-moz-initial' }}
            >
              Hub
            </span>{' '}
          </span>{' '}
        </a>
        {/* nav items - LARGE DEVICES */}
        <ul className="hidden md:flex gap-12">
          {navItems.map(({ path, title }) => (
            <li className="text-base text-primary" key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? 'active' : 'nav_wrapper'
                }
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* signup login */}
         {loggedIn ? (
          <>
          </>
        ) : (
         <div><li className="mt-2">
            <Link to="/login" className="py-2 px-2 mr-3 border rounded">
              Log In
            </Link>
            <Link
              to="/signup"
              className="py-2 px-2 border rounded bg-blue text-white"
            >
              Sign Up
            </Link>
          </li></div> 
        )}
        {/* mobile menu */}
        <div className="md:hidden block">
          <button onClick={handleMenuToggler}>
            {isMenuOpen ? (
              <FaXmark className="w-20 h-5 text-primary" />
            ) : (
              <FaBarsStaggered className="w-20 h-5 text-primary" />
            )}
          </button>
        </div>
      </nav>
      {/* navItems FOR MOB */}
      <div
        className={`nav_mob  p-5  bg-primary text-xl text-slate-50 md:hidden block  rounded-lg  ${
          isMenuOpen ? '' : 'hidden'
        }`}
      >
        {isMenuOpen
          ? navItems.map(({ path, title }) => (
              <li className="mb-2" key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  {title}
                </NavLink>
              </li>
            ))
          : ''}
        {loggedIn ? (
          <>
          </>
        ) : (
          <li className="mt-10">
            <Link to="/login" className="py-2 px-2 mr-3 border rounded">
              Log In
            </Link>
            <Link
              to="/signup"
              className="py-2 px-2 border rounded bg-blue text-white"
            >
              Sign Up
            </Link>
          </li>
        )}
      </div>
    </header>
  )
}

export default Navbar
