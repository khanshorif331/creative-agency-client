import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Home from '../Home/Home'

const Navbar = ({ children }) => {
	const navigation = (
		<>
			<li>
				<NavLink className='rounded-md' to='/'>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink className='rounded-md' to='/ourPortfolio'>
					Our Portfolio
				</NavLink>
			</li>
			<li>
				<NavLink className='rounded-md' to='/ourTeam'>
					Our Team
				</NavLink>
			</li>
			<li>
				<NavLink className='rounded-md' to='/contactUs'>
					Contact Us
				</NavLink>
			</li>
			<li>
				<NavLink className='rounded-md uppercase' to='/login'>
					Login
				</NavLink>
			</li>
		</>
	)
	return (
		<div class='drawer'>
			<input id='my-drawer-3' type='checkbox' class='drawer-toggle' />
			<div class='drawer-content flex flex-col'>
				{/* <!-- Navbar --> */}
				<div class='w-full navbar bg-black sticky top-0 z-10'>
					<div class='flex-none lg:hidden'>
						<label for='my-drawer-3' class='btn btn-square btn-ghost'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								class='inline-block w-6 h-6 stroke-current'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									d='M4 6h16M4 12h16M4 18h16'
								></path>
							</svg>
						</label>
					</div>
					<div class='flex-1 px-2 mx-2 text-white'>Navbar Title</div>
					<div class='flex-none hidden lg:block'>
						<ul class='menu menu-horizontal text-white'>
							{/* <!-- Navbar menu content here --> */}
							{navigation}
						</ul>
					</div>
				</div>
				{/* <!-- Page content here --> */}
				{children}
			</div>
			<div class='drawer-side'>
				<label for='my-drawer-3' class='drawer-overlay'></label>
				<ul class='menu p-4 overflow-y-auto w-80 bg-base-100'>
					{/* <!-- Sidebar content here --> */}
					{navigation}
				</ul>
			</div>
		</div>
	)
}

export default Navbar
