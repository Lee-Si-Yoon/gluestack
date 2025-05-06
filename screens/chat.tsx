import React from 'react';
import { SafeAreaView, View, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import OpenAI from 'openai';
import {
  ChatCompletionContentPartRefusal,
  ChatCompletionContentPartText,
  ChatCompletionMessageParam,
} from 'openai/resources/chat';
3;
import { Text } from '@/components/ui/text';
import { InputField, InputSlot } from '@/components/ui/input';
import { Input } from '@/components/ui/input';

const API_KEY = '';

const openai = new OpenAI({
  apiKey: API_KEY,
});

const parseMessage = (message: ChatCompletionMessageParam) => {
  if (message.role === 'user') {
    if (typeof message.content === 'string') {
      return message.content;
    } else if (Array.isArray(message.content)) {
      return (message.content as ChatCompletionContentPartText[]).map((part) => part.text).join('');
    }
  } else if (message.role === 'assistant') {
    if (message.content === null || message.content === undefined) {
      return '';
    } else if (typeof message.content === 'string') {
      return message.content;
    } else if ('type' in message.content[0] && message.content[0].type === 'text') {
      return (message.content as ChatCompletionContentPartText[]).map((part) => part.text).join('');
    } else if ('type' in message.content[0] && message.content[0].type === 'refusal') {
      return (message.content as ChatCompletionContentPartRefusal[])
        .map((part) => part.refusal)
        .join('');
    }
  }
};

export const Chat = () => {
  const [input, setInput] = React.useState('');
  const [messages, setMessages] = React.useState<ChatCompletionMessageParam[]>([]);

  const handleRun = async () => {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [...messages, { role: 'user', content: input }],
      stream: false,
    });

    if (response.choices[0].message.content) {
      setMessages((prev) => [...prev, response.choices[0].message]);
    }

    setInput('');
  };

  return (
    <SafeAreaView style={{ flex: 1, rowGap: 16, backgroundColor: 'white' }}>
      <ScrollView style={{ flex: 1, paddingHorizontal: 24 }}>
        {messages.map((message, index) => (
          <Text key={`${message.role}-${index}`}>
            {message.role}: {parseMessage(message)}
          </Text>
        ))}
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 64,
          width: '100%',
          paddingHorizontal: 24,
        }}>
        <Input style={{ height: 48 }}>
          <InputField value={input} onChangeText={setInput} placeholder="Ask anything..." />
          <InputSlot style={{ paddingRight: 12 }} onPress={handleRun}>
            <Ionicons name="send" size={16} color="lightgray" />
          </InputSlot>
        </Input>
      </View>
    </SafeAreaView>
  );
};
