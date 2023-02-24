import Link from 'next/link';
import { chakra, LinkProps } from '@chakra-ui/react';

const LinkBase = ({ href, children, ...props }: LinkProps) => {
	const OptimizedLink = chakra(Link, {
		shouldForwardProp: (prop) => ['href', 'children'].includes(prop),
	});

	return (
		<OptimizedLink href={href ? href : ''} {...props}>
			{children}
		</OptimizedLink>
	);
};

export default LinkBase;
