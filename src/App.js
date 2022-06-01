import React, { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import logo from './logo.svg'
import './App.css'
import particlesOptions from './particles.json'
import Navbar from './pages/Shared/Navbar'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import OurPortfolio from './pages/OurPortfolio/OurPortfolio'
import OurTeam from './pages/OurTeam/OurTeam'
import ContactUs from './pages/ContactUs/ContactUs'
import Login from './pages/Login/Login'
import NotFound from './pages/NotFound/NotFound'

function App() {
	const particlesInit = useCallback(main => {
		loadFull(main)
	}, [])

	return (
		<div>
			<Particles
				className='z-50'
				options={particlesOptions}
				init={particlesInit}
			/>
			<Navbar>
				<Routes>
					<Route path='/' element={<Home></Home>}></Route>
					<Route path='/home' element={<Home></Home>}></Route>
					<Route path='/ourTeam' element={<OurTeam></OurTeam>}></Route>
					<Route
						path='/contactUs'
						element={<ContactUs></ContactUs>}
					></Route>
					<Route path='/login' element={<Login></Login>}></Route>
					<Route
						path='/ourPortfolio'
						element={<OurPortfolio></OurPortfolio>}
					></Route>
					<Route path='*' element={<NotFound></NotFound>}></Route>
				</Routes>
			</Navbar>
		</div>
	)
}

export default App
