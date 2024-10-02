import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { useState } from 'react';
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

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuSlide] = useState(new Animated.Value(-300));

  const toggleMenu = () => {
    if (isMenuOpen) {
      Animated.timing(menuSlide, {
        toValue: -300,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setIsMenuOpen(false));
    } else {
      setIsMenuOpen(true);
      Animated.timing(menuSlide, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.titleContainer}>
      <TouchableOpacity onPress={goToFrontPage}>
        <Text style={styles.headerTitle}>ECarHub</Text>
      </TouchableOpacity>
        <Text style={styles.location}>{location}</Text>
      </View>
      <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
         <Text style={styles.hamburgerText}>☰</Text>
      </TouchableOpacity>

      {/* Slide-out menu */}
      <Animated.View
        style={[styles.sideMenu, { transform: [{ translateX: menuSlide }] }]}
      >
        <TouchableOpacity style={styles.sidemenuButton}>
          <Text style={styles.menuButtonText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sidemenuButton}>
          <Text style={styles.menuButtonText}>About Us</Text>
        </TouchableOpacity>

        <TouchableOpacity  style={styles.sidemenuButton}>
          <Text style={styles.menuButtonText}>Contact Us</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sidemenuButton}>
          <Text style={styles.menuButtonText}>Something</Text>
        </TouchableOpacity>
          
      </Animated.View>


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
  sideMenu: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 300,
    height: "100%",
    backgroundColor: "#fff",
    paddingTop: 60,
    paddingHorizontal: 20,
    zIndex: 1000, // Ensure it is above the main content
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  menuButtonText: {
    fontSize: 18,
    color: "#000",
  },
  sidemenuButton: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "ffff",
  },

  
  
});

export default Header;
