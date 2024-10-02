import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import Container from '../components/Container';
import Button from '../components/Button';

interface Car {
  id: number;
  name: string;
  price: string;
  image: string;
  details?: string;
  expanded: boolean;
}

const CarListPage: React.FC = () => {
  const navigation = useNavigation();

  const [cars, setCars] = useState<Car[]>([
    {
      id: 1,
      name: 'Car 1',
      price: 'xx Kr. per day',
      image: 'https://link-to-car1-image.com',
      details: 'Benzin, Manuel, 5 seats\nRange pr. tank: 350km\nDescription: "Hi, my name is Mark, and this is my car. You will receive the keys by me at the car\'s location."',
    },
    {
      id: 2,
      name: 'Car 2',
      price: 'xx Kr. per day',
      image: 'https://link-to-car2-image.com',
      details: 'Benzin, Automat, 4 seats\nRange pr. tank: 400km\nDescription: "My car is perfect for a family trip."',
    },
    {
      id: 3,
      name: 'Car 3',
      price: 'xx Kr. per day',
      image: 'https://link-to-car3-image.com',
      details: 'Diesel, Manual, 5 seats\nRange pr. tank: 600km\nDescription: "You will enjoy driving my fuel-efficient car."',
    },
  ]);

  const [expandedCarId, setExpandedCarId] = useState<number | null>(null);

  const toggleCarDetails = (carId: number) => {
    setExpandedCarId(prevCarId => (prevCarId === carId ? null : carId));
  };

  const goToCheckout = (car: Car) => {
    navigation.navigate('CheckoutPage', { car });
  };

  return (
    <View style={styles.container}>
      <Header location ='Odense V'/>

      <ScrollView contentContainerStyle={styles.scrollView}>
        {cars.map(car => (
          <View key={car.id} style={[styles.carContainer, expandedCarId === car.id && styles.carContainerExpanded]}>
            <Image source={{ uri: car.image }} style={styles.carImage} />
            <Text style={styles.carTitle}>{car.name}</Text>
            <Text style={styles.carPrice}>{car.price}</Text>

            {expandedCarId === car.id && (
              <View style={styles.carDetailsContainer}>
                <Text style={styles.carDetails}>{car.details}</Text>
                <Button title="Rent this car" onPress={() => goToCheckout(car)} />
              </View>
            )}

            <Button
              title={expandedCarId === car.id ? 'Hide Details' : 'View Details'}
              onPress={() => toggleCarDetails(car.id)}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingVertical: 10,
  },
  container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 65,
  },
  carContainer: {
      marginBottom: 20,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 30,
      padding: 15,
      marginHorizontal: 10,
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 3,
  },
  carImage: {
      width: '100%',
      height: 150,
      borderRadius: 10,
      marginBottom: 10,
  },
  carTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  carPrice: {
    fontSize: 16,
    color: '#777',
  },
  carDetailsContainer: {
    marginTop: 10,
  },
  carDetails: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  carContainerExpanded: {
    height: 'auto',
  },
});

export default CarListPage;
