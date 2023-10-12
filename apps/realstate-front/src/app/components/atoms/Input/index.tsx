import {
  Input as ChakraInput,
  InputGroup,
  InputRightElement,
  FormLabel,
} from '@chakra-ui/react';

import invisibleIcon from '../../../assets/icons/invisible-48.png';

interface IInput {
  type?: string;
  placeholder?: string;
  label: string;
}

const Input = ({ type = 'text', placeholder = '', label }: IInput): JSX.Element => {
  return (
    <InputGroup flexDirection="column">
      <FormLabel fontSize="13px" marginBottom={1} color={'#202844'}>
        {label}
      </FormLabel>
      {type === 'password' && (
        <InputRightElement top="26px">
          <img
            src={invisibleIcon}
            alt="Invisible"
            width={24}
            style={{ transform: 'scaleX(-1)' }}
          />
        </InputRightElement>
      )}

      <ChakraInput
        placeholder={placeholder}
        type={type}
        border="none"
        bgColor="#F4F6F9"
        fontSize="14px"
        color="#9A9DAB"
        size="lg"
      />
    </InputGroup>
  );
};

export default Input;
