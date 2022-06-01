import React, { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import logo from './logo.svg'
import './App.css'
import particlesOptions from './particles.json'

function App() {
	const particlesInit = useCallback(main => {
		loadFull(main)
	}, [])

	return (
		<div className='App'>
			<Particles options={particlesOptions} init={particlesInit} />
			<h1 className='text-3xl font-bold' style={{ color: 'red' }}>
				Hello World Love from shorif
			</h1>
			<button class='btn'>Button</button>
		</div>
	)
}

export default App
