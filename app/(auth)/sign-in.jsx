import { View, Text, ScrollView, Image, Alert } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { Link, useRouter } from 'expo-router'; 

import { images } from '../../constants'; 

import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { signIn } from '../../lib/appwrite';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter(); // Usa el hook useRouter

  const submit = async () => {
    if (!form.email || !form.password) { 
      Alert.alert('Error', 'Please fill in all the fields');
      return;
    }

    setIsSubmitting(true); 

    try {
      await signIn(form.email, form.password);

      // Aquí puedes setear el estado global si es necesario

      router.replace('/home'); // Usa router.replace para la navegación
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[83vh] px-4 my-6">
        <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[34px]"
          />

<Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
            Log in to Aora
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Link
              href="/sign-up"
              className="text-lg font-psemibold text-secondary"
            >
              Sign up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;