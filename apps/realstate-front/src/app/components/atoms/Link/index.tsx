import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react';

interface ILink {
  to: string;
  text: string;
  color?: string;
  small?: boolean;
}

const Link = ({ to, text, color = '#246BFD', small }: ILink) => {
  return (
    <ChakraLink
      as={ReactRouterLink}
      to={to}
      color={color}
      fontSize={small ? 13 : 14}
      textDecoration={'underline'}
      fontWeight={500}
    >
      {text}
    </ChakraLink>
  );
};

export default Link;
