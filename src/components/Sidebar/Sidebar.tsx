import { MenuItems } from '@/Menu';
import {
	Avatar,
	Box,
	CloseButton,
	Divider,
	Drawer,
	DrawerContent,
	Flex,
	HStack,
	Icon,
	IconButton,
	Menu,
	MenuButton,
	MenuDivider,
	MenuItem,
	MenuList,
	Text,
	useColorMode,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FiMenu, FiSun, FiMoon } from 'react-icons/fi';
import LinkBase from '../temp/LinkBase';
import { MobileProps, NavItemProps, SidebarProps } from './types';
import Image from 'next/image';
import logo from 'public/spotify.png';

const Sidebar = ({ children }: { children: ReactNode }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Box height="90vh" bg={useColorModeValue('gray.100', 'gray.900')}>
			<SidebarContent key={1} onClose={onClose} display={{ base: 'none', md: 'block' }} />
			<Drawer
				autoFocus={false}
				isOpen={isOpen}
				placement="left"
				onClose={onClose}
				returnFocusOnClose={false}
				onOverlayClick={onClose}
				size="full"
			>
				<DrawerContent>
					<SidebarContent key={2} onClose={onClose} />
				</DrawerContent>
			</Drawer>
			<MobileNav onOpen={onOpen} />
			<Box ml={{ base: 0, md: 60 }}>{children}</Box>
		</Box>
	);
};

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
	return (
		<Box
			bg={useColorModeValue('white', 'gray.900')}
			borderRight="1px"
			borderRightColor={useColorModeValue('gray.200', 'gray.700')}
			w={{ base: 'full', md: 60 }}
			pos="fixed"
			h="full"
			{...rest}
		>
			<Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
				<Image src={logo} alt="Spotify" />
				<CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
			</Flex>
			{MenuItems.map((item, index) =>
				item.icon ? (
					<NavItem key={index} icon={item.icon}>
						{item.name}
					</NavItem>
				) : (
					<Flex key={index} p="1" mx="4"></Flex>
				)
			)}
			<Divider />
			<Text p="4" fontSize="medium">
				Welcome to Premium
			</Text>
		</Box>
	);
};

const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
	return (
		<LinkBase href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
			<Flex
				align="center"
				p="2"
				mx="4"
				borderRadius="lg"
				role="group"
				cursor="pointer"
				_hover={{
					bg: 'cyan.400',
					color: 'white',
				}}
				{...rest}
			>
				{icon && (
					<Icon
						mr="4"
						fontSize="16"
						_groupHover={{
							color: 'white',
						}}
						as={icon}
					/>
				)}
				<Text fontSize="medium">{children}</Text>
			</Flex>
		</LinkBase>
	);
};

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Flex
			ml={{ base: 0, md: 60 }}
			px={{ base: 4, md: 4 }}
			height="20"
			alignItems="center"
			bg={useColorModeValue('white', 'gray.900')}
			borderBottomWidth="1px"
			borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
			justifyContent={{ base: 'space-between', md: 'flex-end' }}
			{...rest}
		>
			<IconButton
				display={{ base: 'flex', md: 'none' }}
				onClick={onOpen}
				variant="outline"
				aria-label="open menu"
				icon={<FiMenu />}
			/>

			<Flex display={{ base: 'flex', md: 'none' }}>
				<Image src={logo} alt="Spotify" />
			</Flex>

			<HStack spacing={{ base: '0', md: '6' }}>
				<IconButton
					size={'sm'}
					variant={'ghost'}
					aria-label={'Toggle Color Mode'}
					onClick={toggleColorMode}
					icon={colorMode == 'light' ? <FiMoon size={18} /> : <FiSun size={18} />}
				/>
				{/* <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<FiBell />} /> */}
				<Flex alignItems={'center'}>
					<Menu>
						<MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
							<HStack>
								<Avatar
									size={'sm'}
									src={
										'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
									}
								/>
								<VStack display={{ base: 'none', md: 'flex' }} alignItems="flex-start" spacing="1px" ml="2">
									<Text fontSize="sm">Justina Clark</Text>
									<Text fontSize="xs" color="gray.600">
										Admin
									</Text>
								</VStack>
							</HStack>
						</MenuButton>
						<MenuList bg={useColorModeValue('white', 'gray.900')} borderColor={useColorModeValue('gray.200', 'gray.700')}>
							<MenuItem>Profile</MenuItem>
							<MenuItem>Settings</MenuItem>
							<MenuItem>Billing</MenuItem>
							<MenuDivider />
							<MenuItem>Sign out</MenuItem>
						</MenuList>
					</Menu>
				</Flex>
			</HStack>
		</Flex>
	);
};

export default Sidebar;
