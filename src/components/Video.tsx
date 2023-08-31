export default function Video() {
	return (
		<video
			className='h-[100vh] w-[100vw] object-fill top-0 right-0 absolute -z-10'
			autoPlay
			muted
			loop
		>
			<source
				src='src/assets/landingvideo.mp4'
				type='video/mp4'
			/>
		</video>
	);
}
