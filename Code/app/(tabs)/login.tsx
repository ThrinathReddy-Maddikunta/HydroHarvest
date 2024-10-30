import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import { ImageBackground } from "react-native";
import beachImage from "@/assets/meditation-images/beach.webp";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  const validate = (): boolean => {
    let valid = true;
    let newErrors: { email?: string; password?: string } = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    if (email == "admin@hydroharvest.in" && password == "admin123") {
      valid = true;
    } else {
      newErrors.password = "Invalid Credentials";
    }

    setErrors(newErrors);
    return valid;
  };

  const handleLogin = () => {
    if (validate()) {
      router.push("/survey-list");
    }
  };

  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <View className="flex-1 justify-center items-center p-4">
          <Text className="text-2xl font-bold mb-6">Login</Text>
          <TextInput
            className="w-full bg-gray-200 p-4 rounded-lg mb-4"
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          {errors.email && (
            <Text className="text-red-500 mb-4">{errors.email}</Text>
          )}
          <TextInput
            className="w-full bg-gray-200 p-4 rounded-lg mb-6"
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          {errors.password && (
            <Text className="text-red-500 mb-6">{errors.password}</Text>
          )}
          <CustomButton
            onPress={() => handleLogin()}
            title="Login"
            containerStyles="bg-blue-400 min-w-full"
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;
