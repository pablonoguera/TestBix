import { Heading as HeadingChakra, VStack } from '@chakra-ui/react';

interface IHeading {
  title: string;
  subtitle: string | JSX.Element;
  mb: string | number;
}

const Heading = ({ title, subtitle, mb = 10 }: IHeading): JSX.Element => {
  return (
    <VStack spacing={4} mb={mb}>
      <HeadingChakra fontWeight={500}>{title}</HeadingChakra>

      <HeadingChakra
        as="h6"
        size="xs"
        color={'grey'}
        fontWeight={500}
        textAlign="center"
      >
        {subtitle}
      </HeadingChakra>
    </VStack>
  );
};

export default Heading;
