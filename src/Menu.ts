import { FiHome, FiTrendingUp, FiSearch, FiGrid, FiHeart, FiPlusCircle } from 'react-icons/fi';
import { IconType } from 'react-icons';

interface MenuItemsProps {
	name: string;
	icon?: IconType;
}

export const MenuItems: Array<MenuItemsProps> = [
	{ name: 'Home', icon: FiHome },
	{ name: 'Search', icon: FiSearch },
	{ name: 'Your library', icon: FiGrid },
	{ name: '', icon: undefined },
	{ name: 'Create Playlist', icon: FiPlusCircle },
	{ name: 'Liked Songs', icon: FiHeart },
];
