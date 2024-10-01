import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface HeaderProps {
  title: string;
  location: string;
  onMenuPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({ location }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.headerTitle}>ECarHub</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 5,
    bottomPadding: 10,
    top: 0,
    position: 'absolute',
    zIndex: 1,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 14,
    color: '#888',
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
