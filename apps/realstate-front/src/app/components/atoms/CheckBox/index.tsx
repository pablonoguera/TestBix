import { Checkbox as ChakraCheckbox } from '@chakra-ui/react';

interface ICheckBox {
  text: string;
}

const CheckBox = ({ text = '' }: ICheckBox): JSX.Element => {
  return (
    <ChakraCheckbox defaultChecked size="lg" colorScheme="bixBlue">
      <span>{text}</span>
    </ChakraCheckbox>
  );
};

export default CheckBox;
