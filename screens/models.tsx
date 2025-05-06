import React from 'react';
import { SafeAreaView, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';

export const Models = () => {
  return (
    <SafeAreaView style={{ flex: 1, rowGap: 16, backgroundColor: 'white' }}>
      <View style={{ marginTop: 12, rowGap: 16, paddingHorizontal: 24 }}>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Heading size="2xl">Models</Heading>
          <Ionicons name="search" size={24} color="black" />
        </View>
      </View>
    </SafeAreaView>
  );
};
