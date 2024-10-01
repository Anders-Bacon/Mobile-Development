import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface ContainerProps {
  children: React.ReactNode;
  backgroundColor?: string;
  style?: ViewStyle;
}

const Container: React.FC<ContainerProps> = ({ children, backgroundColor = '#fff', style }) => {
  return (
    <View style={[styles.container, { backgroundColor }, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Container;
