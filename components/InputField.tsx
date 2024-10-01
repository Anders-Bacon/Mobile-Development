import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

const InputField: React.FC<TextInputProps> = (props) => {
  return <TextInput style={styles.input} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default InputField;
