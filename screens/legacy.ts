import OpenAI from 'openai';
import { TextContentBlock } from 'openai/resources/beta/threads/messages';

export const createAssistant = async (openai: OpenAI) => {
  try {
    await openai.beta.assistants.create({
      name: 'chatbot',
      instructions: 'You are a assistant that answers questions in a short and concise manner.',
      model: 'gpt-4o-mini',
    });
    console.log('Assistant created successfully');
  } catch (e) {
    console.error(e);
    console.log('Assistant creation failed');
  }
};

export const getChatbotAssistantId = async (openai: OpenAI) => {
  try {
    const { data } = await openai.beta.assistants.list();
    return data.find((assistant) => assistant.name === 'chatbot')?.id || null;
  } catch (e) {
    console.log('Chatbot assistant id retrieval failed');
    return null;
  }
};

export const createThread = async (openai: OpenAI) => {
  try {
    const newThread = await openai.beta.threads.create();
    return newThread.id;
  } catch (e) {
    console.log('Thread creation failed');
    return null;
  }
};

export const getMessageByThreadId = (openai: OpenAI) => async (threadId: string) => {
  try {
    const { data } = await openai.beta.threads.messages.list(threadId);
    return data.reverse().map((msg) => ({
      id: msg.id,
      role: msg.role,
      text: (msg.content[0] as TextContentBlock).text.value, // TODO: cover all types of content
    }));
  } catch (e) {
    console.log('Thread message retrieval failed');
    return null;
  }
};
