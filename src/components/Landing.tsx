import Home from './Home';
import Video from './Video';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import { animationStart } from '../utils/animation';
import HeroText from './HeroText';

export default function Landing() {
	return (
		<div>
			<motion.div
				layout
                initial={{ width: 0, height: 0 }}
                animate={{ width: '50vw', height: '100vh' }}
				transition={{ animationStart, duration: 1 }}
				className='flex-start bg-emerald-950'
			>
				<Navbar />
				<Home />
			</motion.div>
			<Video />
		</div>
	);
}
