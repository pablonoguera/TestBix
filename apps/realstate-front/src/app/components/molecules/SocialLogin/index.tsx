import { HStack } from '@chakra-ui/react';
import googleIcon from '../../../assets/icons/google.svg';
import facebookIcon from '../../../assets/icons/facebook.svg';
import appleIcon from '../../../assets/icons/apple.svg';
import IconButton from '../../atoms/IconButton';

const SocialLogin = () => {
  return (
    <HStack spacing='12px' justify="center">
      <IconButton
        onClick={() => null}
        ariaLabel="test"
        icon={<img src={appleIcon} alt="Google" />}
        size="xl"
      />
      <IconButton
        onClick={() => null}
        ariaLabel="test"
        icon={<img src={googleIcon} alt="Google" />}
        size="xl"
      />
      <IconButton
        onClick={() => null}
        ariaLabel="test"
        icon={<img src={facebookIcon} alt="Google" />}
        size="xl"
      />
      
    </HStack>
  );
};

export default SocialLogin;
