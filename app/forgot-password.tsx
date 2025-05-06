import { Center } from '@/components/ui/center';
import { LinkText } from '@/components/ui/link';
import { Text } from '@/components/ui/text';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <Center className="flex-1">
      <Text>Forgot Password</Text>
      <Link href="/">
        <LinkText>Login</LinkText>
      </Link>
    </Center>
  );
}
