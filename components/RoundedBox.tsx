import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface RoundedBoxProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const RoundedBox: React.FC<RoundedBoxProps> = ({ children, style }) => {
  return <View style={[styles.roundedBox, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  roundedBox: {
      backgroundColor: '#ddd',
      paddingVertical: 20,
      paddingHorizontal: 25,
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '85%',
      borderRadius: 10,
      borderColor: '#000',
      borderWidth: 1,
    },
});

export default RoundedBox;
