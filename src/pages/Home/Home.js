import React from 'react'
import Banner from './Banner'
import Partner from './Partner'
import Services from './Services'
import Works from './Works'

const Home = () => {
	return (
		<div className='bg-transparent'>
			<h1>This is home.</h1>
			<Banner></Banner>
			<Partner></Partner>
			<Services></Services>
			<Works></Works>
		</div>
	)
}

export default Home
