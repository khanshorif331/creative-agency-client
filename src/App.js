import React, { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import logo from './logo.svg'
import './App.css'
import particlesOptions from './particles.json'
import Navbar from './pages/Shared/Navbar'
import Home from './pages/Home/Home'

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
			<Navbar></Navbar>
		</div>
	)
}

export default App
