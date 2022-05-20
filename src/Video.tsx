import {Composition} from 'remotion';
import {Scene} from './Scene';

export const RemotionVideo = () => {
	return (
		<>
			<Composition
				durationInFrames={90}
				fps={30}
				component={Scene}
				height={1080}
				width={1920}
				id="Scene"
			/>
		</>
	);
};
