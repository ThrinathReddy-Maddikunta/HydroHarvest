import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import Content from "./Content";

const AppGradient = ({
  children,
  colors,
}: {
  children: any;
  colors: string[];
}) => {
  return (
    <LinearGradient colors={colors} className='flex-1'>
      <Content>{children}</Content>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20, // Approximate conversion of TailwindCSS px-5
    paddingVertical: 12, // Approximate conversion of TailwindCSS py-3
  },
});

export default AppGradient;
