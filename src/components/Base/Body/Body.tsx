import { Container, ResponsiveValue } from '@chakra-ui/react';
import * as CSS from 'csstype';
interface Props {
	align?: ResponsiveValue<CSS.Property.Float>;
	children: React.ReactNode;
}

const Body = ({ children, align }: Props) => {
	return (
		<Container maxW="full" p="6" float={align}>
			{children}
		</Container>
	);
};

export default Body;
