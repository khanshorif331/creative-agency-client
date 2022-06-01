import React from 'react'
import banner from '../../assets/images/logos/Frame.png'

const Banner = () => {
	return (
		<div
		// style={{ backgroundImage: `url(${banner})` }}
		// className='bg-cover bg-no-repeat bg-center bg-blend-overlay z-[-10]'
		>
			<div class='hero min-h-screen'>
				<div class='hero-content grid grid-cols-1 md:grid-cols-2'>
					{/* hero-content flex-col lg:flex-row-reverse justify-center items-center */}

					<div className='text-white'>
						<div class='text-5xl font-bold leading-[4rem]'>
							<span className='hover:text-red-600'>Let's Grow Your</span>
							<span className='hover:text-red-600 block'>
								Brand To The
							</span>
							<span className='hover:text-red-600'>Next Level</span>
						</div>
						<p class='py-6'>
							Provident cupiditate voluptatem et in. Quaerat fugiat ut
							assumenda excepturi exercitationem quasi. In deleniti eaque
							aut repudiandae et a id nisi.
						</p>
						<button
							class='btn btn-primary uppercase
                        '
						>
							Hire Us
						</button>
					</div>
					<img
						src={banner}
						class='w-full rounded-lg shadow-2xl shrink-0'
					/>
				</div>
			</div>
		</div>
	)
}

export default Banner
