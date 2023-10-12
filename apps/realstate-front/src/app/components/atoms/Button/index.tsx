import { Button as ChakraButton } from '@chakra-ui/react';

interface IButton {
  label: string;
  onClick: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
  [key: string]: any; 
}

function Button({ label, onClick, isDisabled, isLoading, ...rest } : IButton): JSX.Element {
  return (
    <ChakraButton
      size="lg"
      height={47}
      backgroundColor={isDisabled ? "#a4c2ff" : "#246BFD"}
      colorScheme="blue"
      borderRadius={30}
      width="100%"
      fontWeight={500}
      onClick={onClick}
      disabled={isDisabled}
      isLoading={isLoading}
      fontSize={16}
      color={"white"}
      border="none"
      {...rest}
    >
      {label}
    </ChakraButton>
  );
}

export default Button;
