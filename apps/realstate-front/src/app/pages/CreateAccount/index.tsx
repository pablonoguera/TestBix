import TextDivider from '../../components/atoms/TextDivider';
import Input from '../../components/atoms/Input';
import Button from '../../components/atoms/Button';
import Link from '../../components/atoms/Link';
import Heading from '../../components/atoms/Heading';
import SocialLogin from '../../components/molecules/SocialLogin';
import CheckBox from '../../components/atoms/CheckBox';

import { VStack, HStack, Text, Box } from '@chakra-ui/react';

const CreateAccount = () => {
  return (
    <Box flex={1}>
      <Heading
        title="Create Account"
        subtitle={
          <>
            Fill your information below or register <br /> with your social
            account
          </>
        }
        mb={'28px'}
      />

      <main>
        <VStack spacing={8} align="stretch" mb={50}>
          <VStack spacing={4}>
            <Input label="Name" placeholder="John Doe" />
            <Input label="Email" placeholder="example@gmail.com" />
            <Input label="Password" type="password" />
            <HStack w="100%">
              <CheckBox text="Agree width" />{' '}
              <Link text="Terms & Condition" small to="#" />
            </HStack>
          </VStack>

          <Button label="Sign Up" onClick={() => null} />
        </VStack>

        <VStack spacing={12} align="stretch" textAlign="center">
          <TextDivider text="Or sign in width" />

          <SocialLogin />

          <Text align="center">
            Don't have an account? <Link text="Sign In" to="/" />
          </Text>
        </VStack>
      </main>
    </Box>
  );
};

export default CreateAccount;
