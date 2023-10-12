import TextDivider from '../../components/atoms/TextDivider';
import Input from '../../components/atoms/Input';
import Button from '../../components/atoms/Button';
import Link from '../../components/atoms/Link';
import Heading from '../../components/atoms/Heading';
import SocialLogin from '../../components/molecules/SocialLogin';
import { VStack, Text, Box } from '@chakra-ui/react';

const SignIn = () => {
  return (
    <Box flex={1}>
      <Heading
        title="Sign in"
        subtitle={"Hi! Welcome back, you've been missed"}
        mb={62}
      />

      <main>
        <VStack spacing={8} align="stretch" mb={50}>
          <VStack spacing={4}>
            <Input label="Email" placeholder="example@gmail.com" />
            <Input label="Password" type="password" />
            <Box w="100%" textAlign="right">
              <Link text="Forgot password?" small to="send-code" />
            </Box>
          </VStack>

          <Button label="Sign In" onClick={() => null} />
        </VStack>

        <VStack spacing={12} align="stretch" textAlign="center">
          <TextDivider text="Or sign in width" />

          <SocialLogin />

          <Text align="center">
            Don't have an account? <Link text="Sign Up" to="create-account" />
          </Text>
        </VStack>
      </main>
    </Box>
  );
};

export default SignIn;
