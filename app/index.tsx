import React from 'react';
import { useRouter } from 'expo-router';
import SuperTokens from 'supertokens-react-native';

import { Login } from '@/screens/auth/login';

export default function Home() {
  const router = useRouter();

  React.useEffect(() => {
    void SuperTokens.doesSessionExist().then((exists) => {
      if (exists) {
        router.push('/tabs');
      }
    });
  }, []);

  return <Login />;
}
