import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  title: string;
  location: string;
  onMenuPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({ location }) => {
  const navigation = useNavigation();

  const goToFrontPage = () => {
    navigation.navigate('FrontPage');
  }

  return (
    <View style={styles.headerContainer}>
      <View style={styles.titleContainer}>
      <TouchableOpacity onPress={goToFrontPage}>
        <Text style={styles.headerTitle}>ECarHub</Text>
      </TouchableOpacity>
        <Text style={styles.location}>{location}</Text>
      </View>
      <TouchableOpacity style={styles.menuButton} onPress={() => { /* Menu action goes here */ }}>
         <Text style={styles.hamburgerText}>☰</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#F1F1F1',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 0,
    bottomPadding: 0,
    top: 0,
    position: 'absolute',
    zIndex: 1,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 7,
  },
  location: {
    fontSize: 14,
    color: '#888',
    paddingHorizontal: 10,
  },
  menuButton: {
    padding: 10,
  },
  hamburgerText: {
    fontSize: 24,
  },
  titleContainer: {
      flexDirection: 'column',
  },
});

export default Header;
