import React, { useState } from 'react';
import { Link, useRouter } from 'expo-router';
import { Keyboard, SafeAreaView, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { LinkText } from '@/components/ui/link';
import {
  FormControl,
  FormControlError,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from '@/components/ui/form-control';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { Checkbox, CheckboxIcon, CheckboxIndicator, CheckboxLabel } from '@/components/ui/checkbox';
import { CheckIcon, EyeIcon, EyeOffIcon } from '@/components/ui/icon';
import { Button, ButtonText } from '@/components/ui/button';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';

const USERS = [
  {
    email: 'test@test.com',
    password: 'test',
  },
  {
    email: 'Test@test.com',
    password: 'test',
  },
];

const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email(),
  password: z.string().min(1, 'Password is required'),
  rememberme: z.boolean().optional(),
});

type LoginSchemaType = z.infer<typeof loginSchema>;

export const Login = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const [validated, setValidated] = useState({
    emailValid: true,
    passwordValid: true,
  });
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: LoginSchemaType) => {
    const user = USERS.find((element) => element.email === data.email);

    if (user) {
      if (user.password !== data.password) setValidated({ emailValid: true, passwordValid: false });
      else {
        setValidated({ emailValid: true, passwordValid: true });

        reset();
        router.push('/tabs');
      }
    } else {
      setValidated({ emailValid: false, passwordValid: true });
    }
  };

  const handleKeyPress = () => {
    Keyboard.dismiss();
    handleSubmit(onSubmit)();
  };

  return (
    <SafeAreaView style={{ flex: 1, rowGap: 16 }}>
      <View style={{ marginTop: 36, paddingHorizontal: 36 }}>
        <Heading size="3xl">Log in</Heading>
        <Text>Login to start using friendli</Text>
      </View>

      <FormControl
        isInvalid={!!errors?.email || !validated.emailValid}
        style={{ paddingHorizontal: 36 }}>
        <FormControlLabel>
          <FormControlLabelText>Email</FormControlLabelText>
        </FormControlLabel>
        <Controller
          defaultValue=""
          name="email"
          control={control}
          rules={{
            validate: async (value) => {
              try {
                await loginSchema.parseAsync({ email: value });
                return true;
              } catch (error: any) {
                return error.message;
              }
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input>
              <InputField
                placeholder="Enter email"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                onSubmitEditing={handleKeyPress}
                returnKeyType="done"
              />
            </Input>
          )}
        />
        <FormControlError>
          <FormControlErrorText>
            {errors?.email?.message || (!validated.emailValid && 'Email ID not found')}
          </FormControlErrorText>
        </FormControlError>
      </FormControl>

      <FormControl
        isInvalid={!!errors.password || !validated.passwordValid}
        style={{ paddingHorizontal: 36 }}>
        <FormControlLabel>
          <FormControlLabelText>Password</FormControlLabelText>
        </FormControlLabel>
        <Controller
          defaultValue=""
          name="password"
          control={control}
          rules={{
            validate: async (value) => {
              try {
                await loginSchema.parseAsync({ password: value });
                return true;
              } catch (error: any) {
                return error.message;
              }
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input>
              <InputField
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter password"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                onSubmitEditing={handleKeyPress}
                returnKeyType="done"
              />
              <InputSlot
                onPress={() => {
                  setShowPassword((showState) => !showState);
                }}
                style={{ paddingRight: 12 }}>
                <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
              </InputSlot>
            </Input>
          )}
        />
        <FormControlError>
          <FormControlErrorText>
            {errors?.password?.message || (!validated.passwordValid && 'Password was incorrect')}
          </FormControlErrorText>
        </FormControlError>
      </FormControl>

      <HStack className="justify-between" style={{ paddingHorizontal: 36 }}>
        <Controller
          name="rememberme"
          defaultValue={false}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Checkbox
              size="sm"
              value="Remember me"
              isChecked={value}
              onChange={onChange}
              aria-label="Remember me">
              <CheckboxIndicator>
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel>Remember me</CheckboxLabel>
            </Checkbox>
          )}
        />
        <Link href="/forgot-password">
          <LinkText className="text-sm font-medium text-primary-700 group-hover/link:text-primary-600">
            Forgot Password?
          </LinkText>
        </Link>
      </HStack>

      <VStack space="lg" style={{ paddingHorizontal: 36 }}>
        <Button className="w-full" onPress={handleSubmit(onSubmit)}>
          <ButtonText className="font-medium">Log in</ButtonText>
        </Button>

        <Button variant="outline" action="secondary" className="w-full gap-2" onPress={() => {}}>
          <ButtonText className="font-medium">Continue with Google</ButtonText>
          <Ionicons name="logo-google" size={16} color="gray" />
        </Button>

        <HStack space="sm" className="justify-center">
          <Text size="md">Don't have an account?</Text>
          <Link href="/signup">
            <LinkText
              className="font-medium text-primary-700 group-hover/link:text-primary-600  group-hover/pressed:text-primary-700"
              size="md">
              Sign up
            </LinkText>
          </Link>
        </HStack>
      </VStack>
    </SafeAreaView>
  );
};
