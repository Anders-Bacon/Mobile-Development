import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Menu and Header */}
      <View style={styles.header}>
        <Text style={styles.companyName}>Name of Company</Text>
        <View style={styles.menuIcon}>
          <View style={styles.menuLine} />
          <View style={styles.menuLine} />
          <View style={styles.menuLine} />
        </View>
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    position: 'absolute',
    top: 40,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  companyName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuIcon: {
    width: 30,
    height: 20,
    justifyContent: 'space-between',
  },
  menuLine: {
    width: '100%',
    height: 3,
    backgroundColor: '#000',
  },
  formBox: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderBottomWidth: 1,
    borderColor: '#000',
    marginBottom: 10,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerText: {
    marginTop: 20,
    fontSize: 16,
  },
});
