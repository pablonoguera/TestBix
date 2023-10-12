import Input from '../../components/atoms/Input';
import Button from '../../components/atoms/Button';
import Heading from '../../components/atoms/Heading';
import IconButton from '../../components/atoms/IconButton';
import { VStack, Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import arrowBack from '../../assets/icons/arrow-back-60.png';

const NewPassword = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  const handleSend = () => {
    navigate('/');
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
        title="New Password"
        subtitle={
          <>
            Your new password must be different <br /> from previously used
            passwords.
          </>
        }
        mb={'42px'}
      />

      <main>
        <VStack spacing={8} align="stretch">
          <VStack spacing={4}>
            <Input type="password" label="Password" />
            <Input type="password" label="Confirm Password" />
          </VStack>

          <Button label="Create New Password" onClick={handleSend} />
        </VStack>
      </main>
    </Box>
  );
};

export default NewPassword;
