import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../components/Header';
import RoundedBox from '../components/RoundedBox';
import InputField from '../components/InputField';
import Button from '../components/Button';
import Container from '../components/Container';

const FrontPage: React.FC = ({ navigation }) => {
  return (
    <Container>
      <Header location="" onMenuPress={() => {}} />

      <RoundedBox>
        <InputField placeholder="Your location?" />
        <InputField placeholder="Pickup" />
        <InputField placeholder="Return" />

        <Button title="Find your car" onPress={() => {}} />
      </RoundedBox>

      {/* Rent your own car link */}
      <TouchableOpacity onPress={() => navigation.navigate('CarListPage')}>
        <Text style={styles.rentCarLink}>Rent your own car!</Text>
      </TouchableOpacity>
    </Container>
  );
};

const styles = StyleSheet.create({
  rentCarLink: {
    color: '#000',
    textDecorationLine: 'underline',
    marginTop: 20,
  },
});

export default FrontPage;
