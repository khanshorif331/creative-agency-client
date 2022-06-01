import React from 'react'
import Banner from './Banner'
import Partner from './Partner'
import Services from './Services'

const Home = () => {
	return (
		<div className='bg-transparent'>
			<h1>This is home.</h1>
			<Banner></Banner>
			<Partner></Partner>
			<Services></Services>
		</div>
	)
}

export default Home
