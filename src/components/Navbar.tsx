import { motion } from 'framer-motion';
import { animationStart } from '../utils/animation';
import { GoNorthStar } from 'react-icons/go';

export default function Navbar() {
	return (
		<motion.div
			initial={{ width: 0, height: 0 }}
			animate={{ width: '50vw', height: '7vh' }}
			transition={{ animationStart, duration: 1 }}
			className='flex'
		>
			<div className='flex p-6 items-center bg-emerald-950 text-white'>
				<GoNorthStar
					size={30}
					className='hover:animate-spin'
				/>
				<div className='flex px-6'>
					<span className='cursor-pointer hover:text-orange-500 px-6 text-[1.5rem] font-semibold'>
						home
					</span>
					<span className='cursor-pointer hover:text-orange-500 px-6 text-[1.5rem] font-semibold'>
						about
					</span>
					<span className='cursor-pointer hover:text-orange-500 px-6 text-[1.5rem] font-semibold'>
						log in
					</span>
				</div>
			</div>
		</motion.div>
	);
}
