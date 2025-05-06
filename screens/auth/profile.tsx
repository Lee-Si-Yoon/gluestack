import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { useRouter } from 'expo-router';

import { AvatarBadge } from '@/components/ui/avatar';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { InputField } from '@/components/ui/input';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ButtonText } from '@/components/ui/button';

export const Profile = () => {
  const router = useRouter();
  const [accessToken, setAccessToken] = React.useState('');

  return (
    <SafeAreaView style={{ flex: 1, rowGap: 16, backgroundColor: '#eee' }}>
      <View style={{ marginTop: 36, rowGap: 16, alignItems: 'center' }}>
        <Avatar size="2xl">
          <AvatarImage alt="Profile Image" source={require('@/assets/images/favicon.png')} />
          <AvatarBadge />
        </Avatar>
        <View>
          <Heading size="xl">Username</Heading>
          <Text>test@test.com</Text>
        </View>
        <View style={{ marginBottom: 8 }}>
          <Button
            variant="outline"
            onPress={() => {
              router.push('/');
            }}>
            <ButtonText>Sign out</ButtonText>
          </Button>
        </View>
      </View>
      <View style={{ backgroundColor: 'white', flex: 1, paddingHorizontal: 36, rowGap: 44 }}>
        <View style={{ rowGap: 16, marginTop: 24 }}>
          <Heading size="2xl">Access token</Heading>
          <View style={{ rowGap: 8 }}>
            <Input>
              <InputField
                placeholder="Enter access token"
                value={accessToken}
                onChangeText={setAccessToken}
              />
            </Input>
            <Button onPress={() => {}}>
              <ButtonText>Save</ButtonText>
            </Button>
          </View>
        </View>
        {/* <View>
          <Heading size="2xl">Teams</Heading>
        </View> */}
      </View>
    </SafeAreaView>
  );
};
