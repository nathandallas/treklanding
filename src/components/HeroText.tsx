import { motion } from 'framer-motion';
import { animationStart } from '../utils/animation';

export default function HeroText() {
	return (
		<motion.div
			initial={{ width: 0, height: 0 }}
			animate={{ width: '50vw', height: '100vh' }}
			transition={{ animationStart, duration: 1 }}
			className='flex'
		>
			<div className='px-20 text-white'>
				<h1 className='font-semibold text-[5rem] leading-[4rem] '>
					Welcome to TrekTracker!
				</h1>
				<h2 className='text-[1.8rem] py-8'>
					Explore the beauty New Hampshire has to offer and
					track your progress hiking the peaks all the way
					to Mount Washington!
				</h2>
			</div>
		</motion.div>
	);
}
