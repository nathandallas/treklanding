import HeroText from './HeroText';
import { motion } from 'framer-motion';
import { animationStart } from '../utils/animation';
import TrailLine from './TrailLine';

// TODO: Make it so it's HeroText on Home, Sign in on Sign In
// and Create Acct on Create Acct

export default function Home() {
	return (
		<motion.div
			layout
			initial={{ width: 0, height: 0 }}
			animate={{ width: '50vw', height: '100vh' }}
			transition={{ animationStart, duration: 1 }}
			className='flex items-center bg-emerald-950'
		>
			<HeroText />
		</motion.div>
	);
}
