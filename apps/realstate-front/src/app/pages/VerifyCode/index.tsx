import PinInput from '../../components/atoms/PinInput';
import Button from '../../components/atoms/Button';
import Heading from '../../components/atoms/Heading';
import IconButton from '../../components/atoms/IconButton';
import { VStack, Box, Text } from '@chakra-ui/react';
import arrowBack from '../../assets/icons/arrow-back-60.png';
import { useNavigate } from 'react-router-dom';

const VerifyCode = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  const handleSend = () => {
    navigate('/new-password');
  };

  return (
    <Box flex={1}>
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
        title="Verify Code"
        subtitle={
          <>
            Please enter the code we just sent to email <br />{' '}
            <Box color={'#3F7EFD'}>example@email.com</Box>
          </>
        }
        mb={'42px'}
      />

      <main>
        <VStack spacing={8} align="stretch">
          <VStack spacing={4}>
            <PinInput />
          </VStack>

          <Box textAlign="center">
            Didn't receive OTP? <br />
            <Text as="u">
              <strong>Resend code</strong>
            </Text>
          </Box>

          <Button label="Verify" onClick={handleSend} />
        </VStack>
      </main>
    </Box>
  );
};

export default VerifyCode;
