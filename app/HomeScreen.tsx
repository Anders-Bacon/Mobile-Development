import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CiMenuBurger } from "react-icons/ci"
import CarChoice from "./car-choice";
import { Link } from "expo-router";


export default function HomeScreen() {

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
    <View style={styles.container}>
      
      {/* Slide-out menu */}
      <Animated.View
        style={[styles.sideMenu, { transform: [{ translateX: menuSlide }] }]}
      >
        <Link href={"/HomeScreen"} style={styles.menuButton}>
          <Text style={styles.menuButtonText}>Home</Text>
        </Link>

        <Link href={"/car-choice"} style={styles.menuButton}>
          <Text style={styles.menuButtonText}>About Us</Text>
        </Link>

        <Link href={"/car-choice"} style={styles.menuButton}>
          <Text style={styles.menuButtonText}>Contact Us</Text>
        </Link>

        <Link href={"/car-choice"} style={styles.menuButton}>
          <Text style={styles.menuButtonText}>Something</Text>
        </Link>
          
      </Animated.View>

      {/* Menu and Header */}
      <View style={styles.header}>
        <Text style={styles.companyName}>Name of Company</Text>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuIcon}>
          <CiMenuBurger style={styles.menuLine}/>
        </TouchableOpacity>
      </View>

      {/* Form Box */}
      <View style={styles.formBox}>
        <TextInput style={styles.input} placeholder="Hvor vil du leje bil?" />
        <TextInput style={styles.input} placeholder="Afhentning" />
        <TextInput style={styles.input} placeholder="Aflevering" />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Find din bil</Text>
        </TouchableOpacity>
      </View>

      {/* Footer Text */}
      <Text style={styles.footerText}>Rent your own car!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    position: "absolute",
    top: 40,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  companyName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  menuIcon: {
    width: 30,
    height: 20,
    justifyContent: "space-between",
  },
  menuLine: {
    
    
  },
  formBox: {
    width: "80%",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#d3d3d3",
    alignItems: "center",
  },
  input: {
    width: "100%",
    height: 40,
    borderBottomWidth: 1,
    borderColor: "#000",
    marginBottom: 10,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#007BFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  footerText: {
    marginTop: 20,
    fontSize: 16,
    borderBottomWidth: 1
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
  menuButton: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  menuButtonText: {
    fontSize: 18,
    color: "#000",
  },
});
