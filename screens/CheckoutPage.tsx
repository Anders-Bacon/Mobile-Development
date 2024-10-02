import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../components/Header';
import Container from '../components/Container';
import Button from '../components/Button';

const CheckoutPage: React.FC = ({ route }: any) => {
  const { car } = route.params;  // Get the car data passed from CarListPage

  return (
    <Container>
      <Header />
      <Container backgroundColor='#CCC' style={styles.containerBorder}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.pageTitle}>CHECKOUT</Text>

        {/* Form fields */}
        <View style={styles.inputGroup}>
          <TextInput placeholder="First name" style={styles.input} />
          <TextInput placeholder="Last name" style={styles.input} />
        </View>

        <TextInput placeholder="Address (Required)" style={styles.input} />

        <View style={styles.inputGroup}>
          <TextInput placeholder="Postal Code" style={styles.input} keyboardType="numeric" />
          <TextInput placeholder="Town/City" style={styles.input} />
        </View>

        <View style={styles.inputGroup}>
          <TextInput placeholder="Phone number" style={styles.input} keyboardType="phone-pad" />
          <TextInput placeholder="E-mail" style={styles.input} keyboardType="email-address" />
        </View>

        {/* Car details and total price */}
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>Details of your purchase:</Text>
          <Text style={styles.detailsText}>• Car: {car.name}</Text>
          <Text style={styles.detailsText}>• Car rental = {car.price}</Text>
        </View>

        {/* Payment button */}
        <Button title="Payment here" />
      </ScrollView>
      </Container>
    </Container>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  input: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    padding: 10,
    margin: 5,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  detailsContainer: {
    marginTop: 20,
    padding: 30,
    paddingHorizontal: 60,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  detailsTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 16,
  },
  detailsText: {
    fontSize: 14,
    marginBottom: 5,
  },
  totalAmount: {
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  paymentButton: {
    backgroundColor: '#ddd',
    borderRadius: 8,
    paddingVertical: 15,
    marginTop: 20,
    alignItems: 'center',
  },
  paymentButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  containerBorder: {
    borderRadius: 20,
    margin: 30,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.83,
    elevation: 3,
    },
});

export default CheckoutPage;
