import { Box, chakra, Img } from '@chakra-ui/react';

interface Props {
	w?: number;
	h?: number;
	img?: string;
	title?: string;
	content?: string;
}

const SquareCardItem = ({ w, h, img, title, content }: Props) => {
	return (
		<Box
			w={w}
			h={h}
			maxW="xs"
			bg="white"
			_dark={{
				bg: '#181818',
			}}
			shadow="lg"
			rounded="lg"
		>
			<Box px={4} py={2}>
				<Img h={156} w={156} mt={2} alt="NIKE AIR" src={img} />

				<chakra.p
					isTruncated
					py={3}
					color="gray.800"
					_dark={{
						color: 'white',
					}}
					fontWeight="extrabold"
					fontSize="sm"
				>
					{title}
				</chakra.p>
				<chakra.p
					isTruncated
					noOfLines={2}
					fontSize="sm"
					color="gray.600"
					_dark={{
						color: 'gray.400',
					}}
					overflowWrap="break-word"
					whiteSpace="break-spaces"
				>
					{content}
				</chakra.p>
			</Box>
		</Box>
	);
};

export default SquareCardItem;
