import Head from 'next/head';
import { Inter } from '@next/font/google';
import Sidebar from '@/components/Sidebar/Sidebar';
import Footer from '@/components/Footer/Footer';
import { Box, Container, Stack, VStack } from '@chakra-ui/react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Spotify Chakra</title>
				<meta name="description" content="Streaming music with Nextjs" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

				<Sidebar>
					<h1>Hello World</h1>
				</Sidebar>
				<Footer />
		</>
	);
}
