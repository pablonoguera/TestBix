import { Divider, AbsoluteCenter, Box } from '@chakra-ui/react';

const TextDivider = ({ text }: { text: string }) => {
  return (
    <Box position="relative">
      <Divider borderColor="#E2EBFF" />
      <AbsoluteCenter bg="white" px="4" color="#8C909F">
        <small> {text} </small>
      </AbsoluteCenter>
    </Box>
  );
};

export default TextDivider;
