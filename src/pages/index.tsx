import Head from 'next/head';
import Sidebar from '@/components/Base/Sidebar/Sidebar';
import Footer from '@/components/Base/Footer/Footer';
import { chakra, SimpleGrid } from '@chakra-ui/react';
import Body from '@/components/Base/Body/Body';
import SquareCardItem from '@/components/Card/SquareCardItem';
import { playlistRecently } from '@/mock_data/playlist';

interface PricingCardProps {
	title: string;
	subLabel: string;
	price: number;
	features: string[];
}

export default function Home({ title, subLabel, price, features }: PricingCardProps) {
	return (
		<>
			<Head>
				<title>Spotify Chakra</title>
				<meta name="description" content="Streaming music with Nextjs" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Sidebar>
				<Body align={'left'}>
					<chakra.h2 fontSize="2xl" fontWeight="bold" mb={5}>
						Recently played
					</chakra.h2>
					<SimpleGrid columns={{ base: 1, md: 10 }} spacing={2}>
						{playlistRecently.map((p, index) => (
							<SquareCardItem key={index} w={190} h={270} {...p} />
						))}
					</SimpleGrid>
				</Body>
			</Sidebar>
			<Footer />
		</>
	);
}
