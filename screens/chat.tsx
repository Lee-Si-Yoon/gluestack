import { SafeAreaView, View, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Text } from '@/components/ui/text';
import { InputField, InputSlot } from '@/components/ui/input';
import { Input } from '@/components/ui/input';

export const Chat = () => {
  return (
    <SafeAreaView style={{ flex: 1, rowGap: 16, backgroundColor: 'white' }}>
      <ScrollView style={{ flex: 1, paddingHorizontal: 24 }}>
        <Text>Hello</Text>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 36,
          width: '100%',
          paddingHorizontal: 24,
        }}>
        <Input style={{ height: 48 }}>
          <InputField placeholder="Ask anything..." returnKeyType="done" />
          <InputSlot style={{ paddingRight: 12 }}>
            <Ionicons name="send" size={16} color="lightgray" />
          </InputSlot>
        </Input>
      </View>
    </SafeAreaView>
  );
};
