interface PlaylistItem {
	img: string;
	title: string;
	content?: string;
}

export const playlistRecently: PlaylistItem[] = [
	{
		img: 'https://i.scdn.co/image/ab67616d00001e027d1c5ab158ea3e9a893cf96a',
		title: 'All Nighter',
		content: 'Tiësto',
	},
	{
		img: 'https://i.scdn.co/image/ab67616d00001e02c58e22815048f8dfb1aa8bd0',
		title: 'Miracle (with Ellie Goulding)',
		content: 'Calvin Harris, Ellie Goulding',
	},
	{
		img: 'https://i.scdn.co/image/ab67706f00000002bb607c8babcb675a6c7155a4',
		title: 'League of Legends Lil Nas X Takeover',
		content: 'The official playlist for all things League of Legends featuring the Worlds Anthem: "STAR WALKIN\'" by Lil Nas X.',
	},
	{
		img: 'https://i.scdn.co/image/ab67616d00001e02d10169c17651c8b2ab5c8416',
		title: 'Arcane League of Legends (Soundtrack from the Animated Series)',
		content: 'Arcane, League of Legends',
	},
];
