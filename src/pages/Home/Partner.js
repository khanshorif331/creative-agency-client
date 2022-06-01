import React from 'react'
import airBnb from '../../assets/images/logos/airbnb.png'
import google from '../../assets/images/logos/google.png'
import netflix from '../../assets/images/logos/netflix.png'
import slack from '../../assets/images/logos/slack.png'
import uber from '../../assets/images/logos/uber.png'

const Partner = () => {
	return (
		<div className='bg-white py-8'>
			<marquee behavior='scroll' direction='left' className='h-full'>
				<div className='flex justify-evenly items-center w-full'>
					<img src={airBnb} width='120' height='80' alt='Natural' />
					<img src={google} width='120' height='80' alt='Natural' />
					<img src={netflix} width='120' height='80' alt='Natural' />
					<img src={slack} width='120' height='80' alt='Natural' />
					<img src={uber} width='120' height='80' alt='Natural' />
				</div>
			</marquee>
		</div>
	)
}

export default Partner
