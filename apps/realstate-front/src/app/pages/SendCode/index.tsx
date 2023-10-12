import Input from '../../components/atoms/Input';
import Button from '../../components/atoms/Button';
import Heading from '../../components/atoms/Heading';
import IconButton from '../../components/atoms/IconButton';
import * as S from './styles';
import { VStack, Box } from '@chakra-ui/react';
import arrowBack from '../../assets/icons/arrow-back-60.png';
import { useNavigate } from 'react-router-dom';

const SendCode = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  const handleSend = () => {
    navigate("/verify-code");
  };

  return (
    <S.Container>
      <Box mb={'32px'}>
        <IconButton
          onClick={handleGoBack}
          ariaLabel="test"
          icon={<img src={arrowBack} width={30} alt="back" />}
          size="lg"
          alt="Back Button"
        />
      </Box>

      <Heading
        title="Send verification code"
        subtitle={'Please enter your email address to reset your password'}
        mb={'42px'}
      />

      <main>
        <VStack spacing={8} align="stretch">
          <VStack spacing={4}>
            <Input type="email" label="Email" placeholder="example@gmail.com" />
          </VStack>

          <Button label="Send code" onClick={handleSend} />
        </VStack>
      </main>
    </S.Container>
  );
};

export default SendCode;
