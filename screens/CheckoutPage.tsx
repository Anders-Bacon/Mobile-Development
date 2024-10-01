import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Button from '../components/Button';
import Header from '../components/Header';

// Define the shape of form data
interface FormData {
  firstName: string;
  lastName: string;
  address: string;
  postalCode: string;
  townCity: string;
  phoneNumber: string;
}

const CheckoutPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    address: '',
    postalCode: '',
    townCity: '',
    phoneNumber: '',
  });

  // Handler for updating form data
  const handleInputChange = (name: keyof FormData, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <View style={styles.container}>
      <Header location="Odense C, 5000" />
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={formData.firstName}
        onChangeText={(value) => handleInputChange('firstName', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={formData.lastName}
        onChangeText={(value) => handleInputChange('lastName', value)}
      />
      {/* Add other inputs */}
      <Button title="Payment Here" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    padding: 10,
  },
});

export default CheckoutPage;
