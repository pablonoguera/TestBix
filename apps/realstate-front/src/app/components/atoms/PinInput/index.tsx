import {
  PinInput as ChakraPinInput,
  PinInputField,
  HStack,
} from '@chakra-ui/react';

const PinInput = () => {
  return (
    <HStack spacing='12px'>
      <ChakraPinInput size="lg" placeholder="-">
        <PinInputField
          width={'56px'}
          bgColor={'#F4F6F9'}
          border="none"
          borderRadius={10}
          height="42px"
          fontSize={14}
        />
        <PinInputField
          width={'56px'}
          bgColor={'#F4F6F9'}
          border="none"
          borderRadius={10}
          height="42px"
          fontSize={14}
        />
        <PinInputField
          width={'56px'}
          bgColor={'#F4F6F9'}
          border="none"
          borderRadius={10}
          height="42px"
          fontSize={14}
        />
        <PinInputField
          width={'56px'}
          bgColor={'#F4F6F9'}
          border="none"
          borderRadius={10}
          height="42px"
          fontSize={14}
        />
      </ChakraPinInput>
    </HStack>
  );
};

export default PinInput;
