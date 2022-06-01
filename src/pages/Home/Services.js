import React from 'react'
import webPhoto from '../../assets/images/icons/service1.png'
import graphicPhoto from '../../assets/images/icons/service2.png'
import devPhoto from '../../assets/images/icons/service3.png'

const Services = () => {
	return (
		<section className='my-12 mx-12'>
			<h1 className='text-white text-3xl text-center font-bold'>
				Provide Awesome <span className='text-red-600'>Services</span>
			</h1>
			<div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{/* bg-base-100 */}
				{/* card */}
				<div class='card text-white border-red-600 hover:border-2 shadow-xl'>
					<figure class='px-10 pt-10'>
						<img src={webPhoto} alt='Shoes' class='rounded-xl' />
					</figure>
					<div class='card-body items-center text-center'>
						<h2 class='card-title'>Web & Mobile Design</h2>
						<p>
							We craft stunning and amazing web UI, using a well drafted
							UX to fit your product.
						</p>
						<div class='card-actions'>
							<button class='btn btn-primary'>Buy Now</button>
						</div>
					</div>
				</div>
				<div class='card  text-white border-red-600 hover:border-2 shadow-xl'>
					<figure class='px-10 pt-10'>
						<img src={graphicPhoto} alt='Shoes' class='rounded-xl' />
					</figure>
					<div class='card-body items-center text-center'>
						<h2 class='card-title'>Graphic Design</h2>
						<p>
							We craft stunning and amazing web UI, using a well drafted
							UX to fit your product.
						</p>
						<div class='card-actions'>
							<button class='btn btn-primary'>Buy Now</button>
						</div>
					</div>
				</div>
				<div class='card  text-white border-red-600 hover:border-2 shadow-xl'>
					<figure class='px-10 pt-10'>
						<img src={devPhoto} alt='Shoes' class='rounded-xl' />
					</figure>
					<div class='card-body items-center text-center'>
						<h2 class='card-title'>Web Development</h2>
						<p>
							We craft stunning and amazing web UI, using a well drafted
							UX to fit your product.
						</p>
						<div class='card-actions'>
							<button class='btn btn-primary'>Buy Now</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Services
