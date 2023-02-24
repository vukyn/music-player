import { roundNumberTwoDecimals, secondToHourMinuteSecond } from '@/utils/datetime';
import {
	Image,
	Flex,
	Stack,
	Text,
	useColorModeValue,
	Center,
	IconButton,
	Slider,
	SliderTrack,
	SliderFilledTrack,
	SliderThumb,
	Spacer,
	keyframes,
	Tooltip,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import cover from 'public/Artwork.jpg';
import { useEffect, useRef, useState } from 'react';
import { BsHeart } from 'react-icons/bs';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {
	TbSwitchHorizontal,
	TbSwitch2,
	TbRefresh,
	TbPlaylist,
	TbVolume2,
	TbPlayerPause,
	TbPlayerPlay,
	TbVolume,
	TbVolume3,
	TbVolumeOff,
} from 'react-icons/tb';
import { DEFAULT_VOLUME_PLAYER } from '../consts/player';

const Footer = () => {
	const [playing, setPlaying] = useState(false);
	const [randomMode, setRandomMode] = useState(false);
	const [mute, setMute] = useState(false);
	const [loop, setLoop] = useState(false);
	const [volume, setVolume] = useState(DEFAULT_VOLUME_PLAYER);
	const [duration, setDuration] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);
	const [playerProgress, setPlayerProgress] = useState(0);
	const audioRef = useRef<HTMLAudioElement>(null);

	const togglePlay = () => {
		const audio = audioRef.current;
		if (audio?.paused) {
			audio?.play();
		} else {
			audio?.pause();
		}
	};

	const handleUpdateAudio = (e: any) => {
		setDuration(e.currentTarget.duration);
		setCurrentTime(e.currentTarget.currentTime);
		setPlayerProgress(roundNumberTwoDecimals((e.currentTarget.currentTime / e.currentTarget.duration) * 100));
	};

	const handleChangeTimeAudio = (time: number) => {
		setPlayerProgress(time);
		if (audioRef.current !== undefined && audioRef.current !== null) audioRef.current.currentTime = (time / 100) * duration;
	};

	const handleChangeVolume = (volume: number) => {
		setMute(false);
		setVolume(volume);
		if (audioRef.current !== undefined && audioRef.current !== null) audioRef.current.volume = volume / 100;
	};

	useEffect(() => {}, [playerProgress]);

	const animationKeyframes = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(-360deg); }
`;

	const animation = `${animationKeyframes} 2s linear infinite`;

	return (
		<Flex
			height="10vh"
			pos="relative"
			display="flex"
			wrap="wrap"
			alignItems="center"
			borderTopWidth={1}
			borderStyle={'solid'}
			bg={useColorModeValue('white', 'gray.900')}
			color={useColorModeValue('gray.700', 'gray.200')}
			borderColor={useColorModeValue('gray.200', 'gray.700')}
		>
			<Stack
				pos="relative"
				w={{ sm: '100%', md: '256px' }}
				height={{ sm: '476px', md: '56px' }}
				direction="row"
				margin={5}
				left="16px"
				justifyContent="center"
				alignItems="center"
			>
				<Image src={cover.src} boxSize="56px" />
				<Stack flexDirection="column" justifyContent="center" alignItems="center">
					<Text fontSize="14px">In my Feeling</Text>
					<Text color={useColorModeValue('gray.700', 'gray.400')} fontSize="12px">
						Drake
					</Text>
				</Stack>
				<IconButton
					_hover={{ color: 'tomato' }}
					_active={{ backgroundColor: 'none' }}
					border="none"
					variant="outline"
					colorScheme="pink"
					aria-label="Call Sage"
					fontSize="15px"
					icon={<BsHeart />}
				/>
			</Stack>

			<Spacer />

			<Stack direction="column" w="638px">
				<Center>
					<Stack direction="row" w="192px">
						<IconButton
							_hover={{ color: 'tomato' }}
							_active={{ backgroundColor: 'none' }}
							border="none"
							variant="outline"
							colorScheme="pink"
							aria-label="Random Player"
							fontSize="17px"
							icon={randomMode ? <TbSwitch2 /> : <TbSwitchHorizontal />}
							onClick={() => setRandomMode(!randomMode)}
						/>
						<Spacer />
						<Tooltip label="Previous song">
							<IconButton
								_hover={{ color: 'tomato' }}
								_active={{ backgroundColor: 'none' }}
								border="none"
								variant="outline"
								colorScheme="pink"
								aria-label="Previous Player"
								fontSize="15px"
								icon={<FaChevronLeft />}
							/>
						</Tooltip>
						<Spacer />
						<Tooltip label={playing ? 'Pause' : 'Play'}>
							<IconButton
								_hover={{ color: 'tomato' }}
								_active={{ backgroundColor: 'none' }}
								border="none"
								variant="outline"
								colorScheme="pink"
								aria-label="Play/Pause Player"
								fontSize="30px"
								icon={playing ? <TbPlayerPause /> : <TbPlayerPlay />}
								onClick={togglePlay}
							/>
						</Tooltip>
						<Spacer />
						<Tooltip label="Next song">
							<IconButton
								_hover={{ color: 'tomato' }}
								_active={{ backgroundColor: 'none' }}
								border="none"
								variant="outline"
								colorScheme="pink"
								aria-label="Next Player"
								fontSize="15px"
								icon={<FaChevronRight />}
							/>
						</Tooltip>
						<Spacer />
						<Tooltip label="Loop">
							<IconButton
								as={motion.div}
								animation={loop ? animation : undefined}
								_hover={{ color: 'tomato', cursor: 'pointer' }}
								_active={{ backgroundColor: 'none' }}
								border="none"
								variant="outline"
								colorScheme="pink"
								aria-label="Loop Player"
								fontSize="17px"
								icon={<TbRefresh />}
								onClick={() => setLoop(!loop)}
							/>
						</Tooltip>
					</Stack>
				</Center>
				<Center>
					<Stack direction="row" w="600px">
						<Text color={useColorModeValue('gray.700', 'gray.400')} fontSize="12px">
							{secondToHourMinuteSecond(currentTime)}
						</Text>
						<Spacer />
						<Slider
							aria-label="slider-ex-2"
							colorScheme="pink"
							value={playerProgress}
							defaultValue={0}
							focusThumbOnChange={false}
							onChange={handleChangeTimeAudio}
						>
							<SliderTrack>
								<SliderFilledTrack />
							</SliderTrack>
							<SliderThumb />
						</Slider>
						<Spacer />
						<Text color={useColorModeValue('gray.700', 'gray.400')} fontSize="12px">
							{secondToHourMinuteSecond(duration)}
						</Text>
					</Stack>
					<audio
						id="player"
						crossOrigin="anonymous"
						preload="none"
						ref={audioRef}
						loop={loop}
						onPlay={() => setPlaying(true)}
						onPause={() => setPlaying(false)}
						onTimeUpdate={handleUpdateAudio}
						onLoadedMetadata={handleUpdateAudio}
						// onLoadStart={() => {
						// 	if (!firstLoad) {
						// 		setLoading(true);
						// 	}
						// }}
						onCanPlay={(e) => {
							// setLoading(false)
							e.currentTarget.volume = DEFAULT_VOLUME_PLAYER / 100;
						}}
					>
						<source src="/MongMotNgayAnhNhoDenEm.mp3" type="audio/mp3" />
						Your browser does not support the audio element.
					</audio>
				</Center>
			</Stack>

			<Spacer />

			<Stack direction="column" w="200px" margin={7}>
				<Stack direction="row" w="192px">
					<IconButton
						_hover={{ color: 'tomato' }}
						_active={{ backgroundColor: 'none' }}
						border="none"
						variant="outline"
						colorScheme="pink"
						aria-label="Call Sage"
						fontSize="17px"
						icon={<TbPlaylist />}
					/>
					<IconButton
						_hover={{ color: 'tomato' }}
						_active={{ backgroundColor: 'none' }}
						border="none"
						variant="outline"
						colorScheme="pink"
						aria-label="Call Sage"
						fontSize="15px"
						icon={
							mute ? (
								<TbVolumeOff />
							) : volume >= DEFAULT_VOLUME_PLAYER ? (
								<TbVolume />
							) : volume > 0 ? (
								<TbVolume2 />
							) : (
								<TbVolume3 />
							)
						}
						onClick={() => setMute(!mute)}
					/>
					<Slider aria-label="slider-ex-2" colorScheme="pink" value={volume} min={0} max={100} onChange={handleChangeVolume}>
						<SliderTrack>
							<SliderFilledTrack />
						</SliderTrack>
						<SliderThumb />
					</Slider>
				</Stack>
			</Stack>
		</Flex>
	);
};

export default Footer;
